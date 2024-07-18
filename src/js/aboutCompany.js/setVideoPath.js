// import Hls from "hls.js";

// const video = document.querySelector(".video__about-company");

// function setVideoPath(lang) {
//   let hlsPlaylistUrl, mp4Url, posterUrl;

//   switch (lang) {
//     case "ru":
//       posterUrl = "./dist/img/About/preview-ukr.jpg";
//       hlsPlaylistUrl = "./dist/videos/preview__rus__optimize.m3u8";
//       mp4Url = "./dist/videos/preview__rus__optimize.mp4";
//       break;
//     case "uk":
//       posterUrl = "./dist/img/About/preview-ukr.jpg";
//       hlsPlaylistUrl = "./dist/videos/preview__ukr__optimize.m3u8";
//       mp4Url = "./dist/videos/preview__ukr__optimize.mp4";
//       break;
//     default:
//       posterUrl = "./dist/img/About/preview-eng.jpg";
//       hlsPlaylistUrl = "./dist/videos/preview__eng__optimize.m3u8";
//       mp4Url = "./dist/videos/preview__eng__optimize.mp4";
//   }

//   video.poster = posterUrl;

//   if (video.canPlayType("application/vnd.apple.mpegurl")) {
//     // Проверяем нативную поддержку HLS
//     video.src = hlsPlaylistUrl;
//     video.load();
//     console.log("сработал нативный");
//   } else if (Hls.isSupported()) {
//     // Если нативная поддержка отсутствует, проверяем поддержку HLS.js
//     const hls = new Hls();
//     hls.loadSource(hlsPlaylistUrl);
//     hls.attachMedia(video);
//     console.log("сработала библиотека");
//   } else {
//     // Если ни одна из поддержек не сработала, используем MP4
//     video.src = mp4Url;
//     video.load();
//   }
// }

// export default setVideoPath;

const videoSource = document.querySelector(".video__about-company source");
const video = document.querySelector(".video__about-company");

function setVideoPath(lang) {
  console.log(lang);
  if (lang === "ru") {
    video.poster = "./dist/img/About/preview-ukr.jpg";
    videoSource.src = "./dist/videos/preview__rus__optimize.mp4";
  } else if (lang === "uk") {
    video.poster = "./dist/img/About/preview-ukr.jpg";
    videoSource.src = "./dist/videos/preview__ukr__optimize.mp4";
  } else {
    video.poster = "./dist/img/About/preview-eng.jpg";
    videoSource.src = "./dist/videos/preview__eng__optimize.mp4";
  }
  video.load();
}

export default setVideoPath;
