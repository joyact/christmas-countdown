const day = document.querySelector('.day span');
const hour = document.querySelector('.hour span');
const min = document.querySelector('.min span');
const sec = document.querySelector('.sec span');

function getTime() {
  // Don't delete this.
  const xmasDay = new Date('2020-12-24:00:00:00+0900');
  const today = new Date();

  //time differnce in seconds
  let timeLeft = Math.floor((xmasDay - today) / 1000);

  //calculate days : 86400 seconds per day
  const dayLeft = Math.floor(timeLeft / 86400);

  //calculate hours : 3600 seconds per hour
  const hourLeft = Math.floor(timeLeft / 3600) % 24;

  //calculate minutes : 60 seconds per minute
  const minLeft = Math.floor(timeLeft / 60) % 60;

  //calculate seconds
  const secLeft = Math.floor(timeLeft) % 60;

  day.innerHTML = `${dayLeft < 10 ? `0${dayLeft}` : dayLeft}`;
  hour.innerHTML = `${hourLeft < 10 ? `0${hourLeft}` : hourLeft}`;
  min.innerHTML = `${minLeft < 10 ? `0${minLeft}` : minLeft}`;
  sec.innerHTML = `${secLeft < 10 ? `0${secLeft}` : secLeft}`;
  console.log(day);
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
