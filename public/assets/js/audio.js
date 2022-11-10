const button = document.querySelector('.audio-control');
const icon = document.querySelector('.audio-control > i');
const audio = document.querySelector('audio');

window.addEventListener('DOMContentLoaded', () => {
  audio.volume = 0.7;
  audio.play();
  icon.classList.add('pulsate');
  console.log(audio);
  handleAudioPlayback();
});

const handleAudioPlayback = () => {
  button.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      icon.classList.add('fa-volume-xmark');
      icon.classList.add('pulsate');
      icon.classList.remove('fa-volume-high');
    } else {
      audio.pause();
      icon.classList.add('fa-volume-high');
      icon.classList.remove('pulsate');
      icon.classList.remove('fa-volume-xmark');
    }
  });
};
