function updateDateTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];
  const currentUTC = currentDate.getTime();
  document.getElementById("currentDay").textContent = currentDay;
  document.getElementById("currentUTC").textContent = currentUTC;
}
updateDateTime();
setInterval(updateDateTime, 1000);
