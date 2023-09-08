const labelDay = document.querySelector(".currentDay");
const labelTime = document.querySelector(".currentUTC");

const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getTodayDate = (_) => {
  return new Date();
};

const getDay = (_) => {
  return getTodayDate().getUTCDay();
};

labelDay.textContent = Days[getDay()];
setInterval(() => {
  labelTime.textContent = new Date().getTime();
}, 1000)