const playPause = document.querySelector('#playPause');

const duration = document.querySelector('#duration');

const volume = document.querySelector('#volume');

const audioIndicator = document.querySelector('#audio');

const video = document.querySelector('video');
const videoplayer = document.querySelector('#video-player');

if (video.src.includes('.mp3') || video.src.includes('.wav')) {
  audioIndicator.style.display = 'block';
}

video.addEventListener('click', playPauseHandler);

playPause.addEventListener('click', playPauseHandler);

function playPauseHandler() {
  console.log('play or pause')
  if (video.paused) {
    video.play();
    playPause.textContent = "PAUSE";
  }  else {
    video.pause();
    playPause.textContent = "PLAY";
  }
}

duration.addEventListener('input', durationHandler);

function durationHandler() {
  console.log(duration.value);
  video.currentTime = (duration.value/100) * video.duration;
}

volume.addEventListener('input', volumeHandler);

function volumeHandler() {
  console.log(volume.value);
  video.volume = volume.value/100;
}

function loopDurationUpdate() {
  duration.value = Math.round((video.currentTime/video.duration)*100);
  setTimeout(() => {
    loopDurationUpdate();
  }, 1000);
}

loopDurationUpdate()