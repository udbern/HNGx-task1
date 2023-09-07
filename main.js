const today = new Date();
const dayOfWeek = today.getDay();
const dayOfWeekString =
  dayOfWeek === 0
    ? "Sunday"
    : dayOfWeek === 1
    ? "Monday"
    : dayOfWeek === 2
    ? "Tuesday"
    : dayOfWeek === 3
    ? "Wednesday"
    : dayOfWeek === 4
    ? "Thursday"
    : dayOfWeek === 5
    ? "Friday"
    : "Saturday";

const currentTime = new Date().getTime();
const formattedTime = new Date(currentTime).toLocaleString("en-US", {
  timeZone: "UTC",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

const currentDayOfTheWeekElement = document.querySelector(
  `p[data-testid="currentDayOfTheWeek"]`
);
currentDayOfTheWeekElement.textContent = ` ${dayOfWeekString}`;

const currentUTCTimeElement = document.querySelector(
  `p[data-testid="currentUTCTime"]`
);
currentUTCTimeElement.textContent = ` ${formattedTime}`;
