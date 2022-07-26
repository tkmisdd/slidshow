let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"日本.png",
"韓国.png",
"https://github.com/tkmisdd/slidshow/blob/main/%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB.png?raw=true",
"https://github.com/tkmisdd/slidshow/blob/main/%E3%82%A4%E3%82%AD%E3%82%99%E3%83%AA%E3%82%B9.png?raw=true",
"https://github.com/tkmisdd/slidshow/blob/main/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2.png?raw=true",
"https://github.com/tkmisdd/slidshow/blob/main/%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B9.png?raw=true",
"ベルギー.png",
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
 mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
    timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
