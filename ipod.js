// Create your global variables below:
var tracklist = ["Hells Bells", "Shoot to Thrill", "What Do You Do for Money Honey", "Giving the Dog a Bone",
  "Let Me Put My Love Into You", "Back In Black", "You Shook Me All Night Long", "Have a Drink on Me",
  "Shake a Leg", "Rock and Roll Ain't Noise Pollution"];
var volLevels = [];
var currTrackNum = 5;
var currLevel = 2;
var fillColor = "#9f5cc4";
var playing;

function init() {
	// Your code goes here
  for (i = 0; i < 6; i++) {
    volLevels[i] = document.getElementById("vl" + i);
  }

  for (i = 0; i < 3; i++) {
    volLevels[i].style.backgroundColor = fillColor;
  }
};

function volUp() {
	// Your code goes here
  volLevels[currLevel + 1].style.backgroundColor = fillColor;
  currLevel ++;
}

function volDown() {
	// Your code goes here
  volLevels[currLevel].style.backgroundColor = "white";
  currLevel --;
}

function switchPlay() {
	// Your code goes here
  playButton = document.getElementById("play-button");
  playTime = document.getElementById("player-start");
  playInput = document.getElementById("time-slider");
  if (playButton.innerHTML == "play_arrow") {
    playButton.innerHTML = "pause";
    playing = setInterval(function() {
      playInput.value ++;
      playTime.innerHTML = secondsToMs(playInput.value);
      if (playInput.value == 180) {
        nextSong();
      }
    }, 1000);
  } else {
    playButton.innerHTML = "play_arrow";
    clearInterval(playing);
  }



}

function nextSong() {
	// Your code goes here
  currTrack = document.getElementById("player-song-name");
  if (currTrackNum == 9) {
    currTrackNum = 0;
  } else {
    currTrackNum ++;
  }
  currTrack.innerHTML = tracklist[currTrackNum];

  playTime = document.getElementById("player-start");
  playTime.innerHTML = "0:00";
  playInput = document.getElementById("time-slider");
  playInput.value = 0;
}

function prevSong() {
	// Your code goes here
  currTrack = document.getElementById("player-song-name");
  if (currTrackNum == 0) {
    currTrackNum = 9;
  } else {
    currTrackNum --;
  }
  currTrack.innerHTML = tracklist[currTrackNum];

  playTime = document.getElementById("player-start");
  playTime.innerHTML = "0:00";
  playInput = document.getElementById("time-slider");
  playInput.value = 0;
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

function checkSlider() {
  playInput = document.getElementById("time-slider");
  playOutput = document.getElementById("player-start");
  playOutput.innerHTML = secondsToMs(playInput.value);
}

init();
