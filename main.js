document.addEventListener("DOMContentLoaded", function () {
  const currentDayOfTheWeek = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const currentUTCTime = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

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
  const dayIndex = currentDate.getUTCDay();
  currentDayOfTheWeek.textContent = daysOfWeek[dayIndex];

  const utcTime = currentDate.getTime();
  currentUTCTime.textContent = `Time: ${utcTime}`;
});
