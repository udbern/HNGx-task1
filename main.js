const labelDay = document.querySelector(".day");
const labelTime = document.querySelector(".time");

const weekDays = [
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

labelDay.textContent = weekDays[getDay()];
setInterval(() => {
  labelTime.textContent = new Date().getTime();
}, 1000)