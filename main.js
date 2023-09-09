function updateDateTime() {
  const dayOfWeek = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const utcTimeInMillis = new Date().getTime();

  
  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    dayOfWeek;
  document.querySelector('[data-testid="currentUTCTime"]').textContent =
    utcTimeInMillis;
}

updateDateTime();
setInterval(updateDateTime, 1000);
