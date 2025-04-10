# QUOKKA MUZIP 🎵

QUOKKA MUZIP은 사용자의 기분, 날씨, 그리고 취향에 맞는 음악을 추천해주는 웹 애플리케이션입니다. Spotify API를 활용하여 개인화된 음악 경험을 제공합니다.

## 주요 기능 🚀

### 1. 다양한 음악 추천 방식
- **무드 기반 추천**: 사용자의 현재 기분에 맞는 음악 추천
- **날씨 기반 추천**: 현재 위치의 날씨 데이터를 기반으로 한 플레이리스트 추천
- **랜덤 추천**: 다양한 키워드를 활용한 랜덤 음악 추천
- **Top 100**: 인기 있는 플레이리스트 제공

### 2. 플레이리스트 관리
- 추천받은, 좋아하는 곡들로 개인 플레이리스트 생성
- 플레이리스트 관리 및 조회

### 3. 음악 재생
- 웹 인터페이스에서 직접 음악 재생
- 재생 컨트롤 (재생, 일시정지, 다음곡, 이전곡)
- 볼륨 조절

### 4. 사용자 계정 관리
- Spotify 계정 연동
- 사용자 프로필 조회

## 기술 스택 💻

### 프론트엔드
- HTML, CSS, JavaScript
- Bootstrap 5
- EJS (템플릿 엔진)

### 백엔드
- Node.js
- Express.js
- Spotify Web API

### API 통합
- Spotify API (인증, 음악 검색, 재생 등)
- OpenWeather API (날씨 데이터)
- Kakao API (위치 정보)

## 설치 및 실행 방법 ⚙️

### 사전 요구사항
- Node.js 설치
- Spotify Developer 계정
- OpenWeather API 키
- Kakao API 키

### 설치 절차
1. 저장소 클론
   ```bash
   git clone <저장소 URL>
   cd quokka-muzip
   ```

2. 의존성 설치
   ```bash
   npm install
   ```

3. 환경 변수 설정
   `.env` 파일을 프로젝트 루트 디렉토리에 생성하고 다음 값을 설정:
   ```
   PORT=7777
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   SPOTIFY_REDIRECT_URI=http://localhost:7777/auth/callback
   OPENWEATHER_API_KEY=your_openweather_api_key
   KAKAO_API_KEY=your_kakao_api_key
   ```

4. 애플리케이션 실행
   ```bash
   npm start
   ```

5. 브라우저에서 `http://localhost:7777` 접속

## 프로젝트 구조 📂

```
quokka-muzip/
│
├── bin/                    # 서버 실행 스크립트
│   └── www
│
├── public/                 # 정적 파일 (CSS, JS, 이미지 등)
│   ├── css/
│   ├── js/
│   └── image/
│
├── routes/                 # 라우트 핸들러
│   ├── auth.js             # 인증 관련 라우트
│   ├── main.js             # 메인 페이지 라우트
│   ├── mood.js             # 무드 기반 추천 라우트
│   ├── weather.js          # 날씨 기반 추천 라우트
│   └── ...
│
├── views/                  # EJS 템플릿
│   ├── partials/           # 재사용 가능한 템플릿 부분
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │   └── ...
│   │
│   ├── index.ejs           # 시작 페이지
│   ├── main.ejs            # 메인 대시보드
│   ├── mood.ejs            # 무드 기반 추천 페이지
│   └── ...
│
├── middleware/             # 미들웨어
│   └── spotifyToken.js     # Spotify 토큰 관리
│
├── services/               # 서비스 로직
│   └── spotifyService.js   # Spotify API 관련 서비스
│
├── app.js                  # Express 앱 설정
├── package.json            # 프로젝트 메타데이터 및 의존성
└── README.md               # 이 문서
```

## 주요 페이지 소개 🖼️

1. **시작 페이지**: 환영 동영상과 함께 서비스 소개 및 로그인 버튼 제공
2. **메인 대시보드**: 무드, 날씨, Top 100, 랜덤 등 다양한 음악 추천 옵션 제공
3. **무드 기반 추천**: 현재 기분, 에너지 레벨 등을 선택하여 맞춤형 음악 추천
4. **날씨 기반 추천**: 현재 위치의 날씨에 맞는 음악 추천
5. **Top 100**: 다양한 인기 플레이리스트 제공
6. **랜덤 추천**: 다양한 키워드로 랜덤하게 음악 추천
7. **내 플레이리스트**: 사용자의 Spotify 플레이리스트 관리
8. **프로필**: 사용자 계정 정보 조회

## API 사용 📡

### Spotify API
- 사용자 인증 (OAuth 2.0)
- 음악 검색 및 추천
- 플레이리스트 관리
- 음악 재생 제어

### OpenWeather API
- 현재 위치 기반 날씨 데이터 조회

### Kakao API
- 좌표 기반 주소 정보 조회
