const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysChecked = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/audios/tunes/");

const playTune = (key) => {
  audio.src = `src/audios/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  console.log(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key.toLowerCase())) {
    playTune(e.key);
  }
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

keysChecked.addEventListener("input", showHideKeys);
