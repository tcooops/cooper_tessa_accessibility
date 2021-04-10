const playPause = document.querySelector('#playPause');

const duration = document.querySelector('#duration');

const volume = document.querySelector('#volume');

const fullscreen = document.querySelector('#fullscreen');

const audioIndicator = document.querySelector('#audio');

const video = document.querySelector('video');
const videoplayer = document.querySelector('#videoplayer');

if (video.src.includes('.mp3') || video.src.includes('.wav')) {
  audioIndicator.style.display = 'block';
}

// click the video to pause or play
video.addEventListener('click', playPauseHandler);
// the pause and play here
playPause.addEventListener('click', playPauseHandler);

function playPauseHandler() {
  console.log('play or pause')
  if (video.paused) {
    video.play();
    playPause.textContent = "Pause";
  }  else {
    video.pause();
    playPause.textContent = "Play";
  }
}

// duration here
duration.addEventListener('input', durationHandler);

function durationHandler() {
  console.log(duration.value);
  // set new time here
  video.currentTime = (duration.value/100) * video.duration;
}

// media volume
volume.addEventListener('input', volumeHandler);

function volumeHandler() {
  console.log(volume.value); // volume
  video.volume = volume.value/100;
}

// fullscreen
fullscreen.addEventListener('click', fullscreenHandler);

function fullscreenHandler() {
  console.log('toggling fullscreen')
  if (!window.fullScreen) {
    if (videoplayer.requestFullscreen) {
      videoplayer.requestFullscreen();
    } else if (videoplayer.webkitRequestFullscreen) {
      videoplayer.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function loopDurationUpdate() {
  duration.value = Math.round((video.currentTime/video.duration)*100);
  setTimeout(() => {
    loopDurationUpdate();
  }, 1000);
}

loopDurationUpdate()