export const convertToTime = duration => {
  duration = duration.toString();
  const stringElements = duration.split("");
  stringElements.splice(duration.length - 3, 0, ".");
  const time = +stringElements.join("");

  const hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = Math.round(time - (hours * 3600 + minutes * 60));

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return hours === 0
    ? `${minutes}:${seconds}`
    : `${hours}:${minutes}:${seconds}`;
};

export const handleProgress = () => {
  const progressBar = document.getElementById("progress-bar");
  const player = document.getElementById("audio-player");

  player.addEventListener("timeupdate", () => {
    progressBar.setAttribute("value", player.currentTime / player.duration);
  });

  progressBar.addEventListener("change", () => {
    player.currentTime = progressBar.value;
  });
};

export const handleVolume = () => {
  const volumeBar = document.getElementById("volume");
  const player = document.getElementById("audio-player");

  volumeBar.addEventListener("change", () => {
    player.volume = volumeBar.value / 10;
  });
};

export const showHideVolumeSlider = () => {
  const volumeBar = document.getElementById("volume");
  if (volumeBar.classList.contains("active")) {
    volumeBar.classList.remove("active");
  } else {
    volumeBar.classList.add("active");
  }
};
