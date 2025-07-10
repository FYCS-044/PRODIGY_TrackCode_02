let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

function updateTime() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerText = `${h}:${m}:${s}`;
}

function startStop() {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
    document.querySelector(".buttons button").innerText = "Start";
  } else {
    timer = setInterval(updateTime, 1000);
    document.querySelector(".buttons button").innerText = "Pause";
  }
}

function reset() {
  clearInterval(timer);
  timer = null;
  [seconds, minutes, hours] = [0, 0, 0];
  display.innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  document.querySelector(".buttons button").innerText = "Start";
}

function lap() {
  let lapTime = display.innerText;
  let lapItem = document.createElement("li");
  lapItem.innerText = "Lap: " + lapTime;
  document.getElementById("laps").appendChild(lapItem);
}
