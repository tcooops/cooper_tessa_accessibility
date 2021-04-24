const playPause = document.querySelector('#playPause');

const duration = document.querySelector('#duration');

const volume = document.querySelector('#volume');

const audioIndicator = document.querySelector('#audio');

const fullscreen = document.querySelector('#fullscreen');

const video = document.querySelector('video');

const videoplayer = document.querySelector('#video-player');

if (video.src.includes('.mp3') || video.src.includes('.wav')) {
  audioIndicator.style.display = 'block';
}

video.addEventListener('click', playPauseHandler);

playPause.addEventListener('click', playPauseHandler);

function playPauseHandler() {
  if (video.paused) {
    video.play();
    playPause.textContent = "PAUSE";
  }  else {
    video.pause();
    playPause.textContent = "PLAY";
  }
}

duration.addEventListener('input', durationHandler);

// shows length of video & allows user to scrub through
function durationHandler() {
  video.currentTime = (duration.value/100) * video.duration;
}

volume.addEventListener('input', volumeHandler);

// allows user to adjust volume of audio/video
function volumeHandler() {
  video.volume = volume.value/100;
}

fullscreen.addEventListener('click', fullscreenHandler);

// allows the user to expand the media to be fullscreen... can't figure out why my video won't be fullscreen though...
function fullscreenHandler() {
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

// caption

const captionShow = document.querySelector('#captionShow');
const caption = document.querySelector('#caption');

caption.addEventListener('click', captionHandler);


function captionHandler() {
  if (captionShow.style.display == 'block') {
    captionShow.style.display = 'none';
  } else {
    captionShow.style.display = 'block';
    captionShow.children[1].textContent = captions[video.title];
  }

}

const captions = {
  bladerunner: ` Every civilization was built off the back of a disposable workforce, but I can only make so many... shhhh... happy birthday.

  There is an order to things. That's what we do here. We keep order.
  
  The world is built on a wall that separates kind. Tell either side there's no wall... You bought a war.

  You're a cop. I did your job once. I was good at it.
  
  I know.
  
  What do you want?
  
  I want to ask you some questions.
  
  They know you're here. 

  I always told you... you're special

  Your story isn't over yet. There's still a page left . `,

  mando: ` Bounty hunting is a complicated profession.

  don't you agree? `,
  
  bobcaygeon: ` I left your house this mornin'
  About a quarter after nine
  Could have been the Willie Nelson
  Could have been the wine
  When I left your house this mornin'
  It was a little after nine
  It was in Bobcaygeon, I saw the constellations
  Reveal themselves one star at a time
  Drove back to town this mornin'
  With workin' on my mind
  I thought of maybe quittin'
  I thought of leavin' it behind
  I went back to bed this mornin'
  And as I'm pullin' down the blind
  Yeah, the sky was dull, and hypothetical
  And fallin' one cloud at a time
  That night in Toronto
  With its checkerboard floors
  Riding on horseback
  And keepin' order restored
  'Til the men, they couldn't hang
  Stepped to the mic and sang
  And their voices rang
  With that Aryan twang
  I got to your house this mornin'
  Just a little after nine
  In the middle of that riot
  Couldn't get you off my mind
  So I'm at your house this mornin'
  Just a little after nine
  'Cause it was in Bobcaygeon where I saw the constellations
  Reveal themselves one star at a time `
}