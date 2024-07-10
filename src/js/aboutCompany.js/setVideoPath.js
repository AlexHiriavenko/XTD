const videoSource = document.querySelector(".video__about-company source");
const video = document.querySelector(".video__about-company");

function setVideoPath(lang) {
  console.log(lang);
  if (lang === "ru") {
    videoSource.src = "./dist/videos/preview-rus.mp4";
  } else if (lang === "uk") {
    videoSource.src = "./dist/videos/preview-ukr.mp4";
  } else {
    videoSource.src = "./dist/videos/preview-eng.mp4";
  }

  video.controls = false;
  video.load();
  video.oncanplay = () => (video.controls = true);
}

export default setVideoPath;
