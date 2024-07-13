const videoSource = document.querySelector(".video__about-company source");
const video = document.querySelector(".video__about-company");

function setVideoPath(lang) {
  console.log(lang);
  if (lang === "ru") {
    video.poster = "./dist/img/About/preview-rus.jpg";
    videoSource.src = "./dist/videos/preview-rus.mp4";
  } else if (lang === "uk") {
    video.poster = "./dist/img/About/preview-rus.jpg";
    videoSource.src = "./dist/videos/preview-ukr.mp4";
  } else {
    video.poster = "./dist/img/About/preview-eng.jpg";
    videoSource.src = "./dist/videos/preview-eng.mp4";
  }
  video.load();
}

export default setVideoPath;
