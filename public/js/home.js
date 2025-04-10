document.addEventListener("DOMContentLoaded", async () => {
  const app = document.getElementById("app");

  // 사용자 상태 확인 함수
  const checkUserStatus = async () => {
    try {
      const response = await fetch('/auth/status');
      if (!response.ok) throw new Error('Failed to fetch user status');
      const data = await response.json();
      return data.user || null; // 사용자 정보 반환
    } catch (err) {
      console.error('Error checking user status:', err);
      return null; // 오류 발생 시 null 반환
    }
  };

  // 동영상 생성 함수
  const createVideoContainer = (id, src) => {
    const container = document.createElement("div");
    container.className = "video-container";
    container.id = id;
    container.style.display = "none"; // 초기 상태는 숨김

    const video = document.createElement("video");
    video.autoplay = true;
    video.muted = true;
    video.innerHTML = `<source src="${src}" type="video/mp4">Your browser does not support the video tag.`;

    container.appendChild(video);
    return container;
  };

  // 로그인 콘텐츠 생성 함수
  const createLoginContent = () => {
    const container = document.createElement("div");
    container.id = "login-content";
    container.className = "container text-center mt-5";
    container.style.display = "none"; // 초기 상태는 숨김

    container.innerHTML = `
      <a href="#" id="login-button" class="btn btn-primary mt-3">ENTER</a>
    `;
    return container;
  };

  // 초기 동영상, 엔터 동영상, 로그인 콘텐츠 추가
  const introVideo = createVideoContainer("intro-video", "/videos/intro-video.mp4");
  const enterVideo = createVideoContainer("enter-video", "/videos/enter-video.mp4");
  const loginContent = createLoginContent();

  app.appendChild(introVideo);
  app.appendChild(enterVideo);
  app.appendChild(loginContent);

  // 초기 동영상 표시 및 재생
  introVideo.style.display = "flex"; // 초기 동영상 표시
  const introVideoElement = introVideo.querySelector("video");

  // 초기 동영상 종료 이벤트
  introVideoElement.addEventListener("ended", async () => {
    introVideo.style.display = "none"; // 초기 동영상 숨김
    loginContent.style.display = "block"; // 로그인 버튼 표시
  });

  // 로그인 버튼 클릭 시
  document.getElementById("login-button").addEventListener("click", async (event) => {
    event.preventDefault(); // 기본 링크 동작 방지

    loginContent.style.display = "none"; // 로그인 콘텐츠 숨김
    //enterVideo.style.display = "flex"; // 엔터 동영상 표시

    const enterVideoElement = enterVideo.querySelector("video");
    enterVideoElement.play().catch((err) => console.error("엔터 동영상 재생 오류:", err));

    // 엔터 동영상 종료 이벤트
    enterVideoElement.addEventListener("ended", async () => {
      const user = await checkUserStatus();

      if (!user) {
        console.log("Redirecting to login...");
        sessionStorage.setItem("post-login", "true"); // 로그인 후 엔터 동영상 재생 플래그
        window.location.href = "/auth/login"; // 로그인 페이지로 이동
      } else {
        console.log(`Logged in as ${user.name}`);
        window.location.href = "/main"; // 메인 페이지로 이동
      }
    });
  });

  // 로그인 상태 확인 및 자동 이동
  const user = await checkUserStatus();
  const postLogin = new URLSearchParams(window.location.search).get("post-login");

  if (user || postLogin) {
    if (postLogin) {
      sessionStorage.setItem("post-login", "true"); // 플래그 설정
      window.history.replaceState({}, document.title, "/"); // URL 정리
    }

    introVideo.style.display = "none"; // 초기 동영상 숨김
    loginContent.style.display = "none"; // 로그인 콘텐츠 숨김
    enterVideo.style.display = "flex"; // 엔터 동영상 표시

    const enterVideoElement = enterVideo.querySelector("video");
    enterVideoElement.play().catch((err) => console.error("엔터 동영상 재생 오류:", err));

    // 엔터 동영상 종료 이벤트
    enterVideoElement.addEventListener("ended", () => {
      window.location.href = "/main"; // 메인 페이지로 이동
    });
  }

});
