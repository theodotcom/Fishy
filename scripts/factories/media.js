import { getNickname } from "../utils/index.js";

export default function mediaFactory(data, photographerName) {
  const picture = `Sample Photos/${getNickname(photographerName)}/${
    data.image ? data.image : data.video
  }`;
  const title = data.title;
  console.log(title)
  if (data.image) {
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    console.log(img);
    console.log(title);
    return img ;
  } else if (data.video) {
    const video = document.createElement("video");
    video.controls = true;
    const source = document.createElement("source");
    source.setAttribute("src", picture);
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);
    video.addEventListener("click", function () {
      source.setAttribute("play", true);
    });
    return video;
  }
}
