const express = require('express');
const router = express.Router();
const { ensureSpotifyToken } = require('../middleware/spotifyToken');

// 메인 페이지
router.get('/', ensureSpotifyToken, async(req, res) => {
  try {
    // Spotify API에서 사용자 정보 가져오기
    const userProfile = await req.spotifyApi.getMe();
    res.render('main', { user: userProfile.body });
    const user = req.session.user || null;
  } catch (error) {
    console.error('Spotify API 요청 실패:', error.message || error);
    res.status(500).send('회원정보를 가져오는 데 실패했습니다.');
  }
});

module.exports = router;
