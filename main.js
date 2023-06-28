function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;//258
    var elementTop = reveals[i].getBoundingClientRect().top; // 1 of the .reveal objects top point
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);







function pla(lol) {
  lol.play();
}
function paus(lol) {
  lol.pause();
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" lol", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " lol";
}
let slideInde = 0;
show();

function show() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideInde++;
  if (slideInde > slides.length) { slideInde = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideInde - 1].style.display = "block";
  dots[slideInde - 1].className += " active";
  setTimeout(show, 20000); // Change image every 20 seconds
}





songList = [document.getElementById("song1"), document.getElementById("song2"), document.getElementById("song3"), document.getElementById("song4"), document.getElementById("song5"), document.getElementById("song6"), document.getElementById("song7"),]
currentSong = songList[0];

songName = document.getElementById("songName");

songNameList = ["Brown Munde", "Excuses", "Arrogant", "Toxic", "Summer High", "Insane", "Majhe Aale"]

function playSong() {
  playElement = document.getElementById("playButton");
  if (playElement.className == "fas fa-pause iconsss") {
    console.log("lol")
    currentSong.pause();
    playElement.className = "fas fa-play iconsss"
  }
  else if (playElement.className == "fas fa-play iconsss") {
    currentSong.play();
    playElement.className = "fas fa-pause iconsss"
  }
}

function previousSong() {
  playElement = document.getElementById("playButton");
  if (currentSong == songList[0]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[6];
    currentSong.play();
    songName.innerHTML = songNameList[6];
  }
  else if (currentSong == songList[1]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[0];
    currentSong.play();
    songName.innerHTML = songNameList[0];
  }
  else if (currentSong == songList[2]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[1];
    currentSong.play();
    songName.innerHTML = songNameList[1];
  }
  else if (currentSong == songList[3]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[2];
    currentSong.play();
    songName.innerHTML = songNameList[2];
  }
  else if (currentSong == songList[4]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[3];
    currentSong.play();
    songName.innerHTML = songNameList[3];
  }
  else if (currentSong == songList[5]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[4];
    currentSong.play();
    songName.innerHTML = songNameList[4];
  }
  else if (currentSong == songList[6]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[5];
    currentSong.play();
    songName.innerHTML = songNameList[5];
  }
}

function nextSong() {
  playElement = document.getElementById("playButton");
  if (currentSong == songList[0]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[1];
    currentSong.play();
    songName.innerHTML = songNameList[1];
  }
  else if (currentSong == songList[1]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[2];
    currentSong.play();
    songName.innerHTML = songNameList[2];
  }
  else if (currentSong == songList[2]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[3];
    currentSong.play();
    songName.innerHTML = songNameList[3];
  }
  else if (currentSong == songList[3]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[4];
    currentSong.play();
    songName.innerHTML = songNameList[4];
  }
  else if (currentSong == songList[4]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[5];
    currentSong.play();
    songName.innerHTML = songNameList[5];
  }
  else if (currentSong == songList[5]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[6];
    currentSong.play();
    songName.innerHTML = songNameList[6];
  }
  else if (currentSong == songList[6]) {
    if (playElement.className == "fas fa-play iconsss") {
      playElement.className = "fas fa-pause iconsss"
    }
    currentSong.currentTime = 0
    currentSong.pause();
    currentSong = songList[0];
    currentSong.play();
    songName.innerHTML = songNameList[0];
  }
}

function BrownMunde() {
  playElement = document.getElementById("playButton");
  currentSong.currentTime = 0
  currentSong.pause();
  currentSong = songList[0];
  currentSong.play();
  songName.innerHTML = songNameList[0];
  if (playElement.className == "fas fa-play iconsss") {
    playElement.className = "fas fa-pause iconsss"
  }
}
function Excuses() {
  playElement = document.getElementById("playButton");
  currentSong.currentTime = 0
  currentSong.pause();
  currentSong = songList[1];
  currentSong.play();
  songName.innerHTML = songNameList[1];
  if (playElement.className == "fas fa-play iconsss") {
    playElement.className = "fas fa-pause iconsss"
  }
}
function Summer() {
  playElement = document.getElementById("playButton");
  currentSong.currentTime = 0
  currentSong.pause();
  currentSong = songList[4];
  currentSong.play();
  songName.innerHTML = songNameList[4];
  if (playElement.className == "fas fa-play iconsss") {
    playElement.className = "fas fa-pause iconsss"
  }
}