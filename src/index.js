const clock = document.querySelector(".christmas-clock");

const CountDownToChristmas = () => {
  const christmasDate = new Date("2022, 12, 25");
  const CurrentDate = new Date();
  const diffTime = christmasDate - CurrentDate;
  const diffDay = Math.floor(diffTime / (1000 * 3600 * 24));
  const diffHour = Math.floor(
    (diffTime - diffDay * 1000 * 3600 * 24) / (1000 * 3600)
  );
  const diffMinutes = Math.floor((diffTime % (1000 * 3600)) / (60 * 1000));
  const diffSecounds = Math.floor((diffTime % (60 * 1000)) / 1000);

  const padZero = (timeNum) => String(timeNum).padStart(2, "0");

  clock.innerText = `${padZero(diffDay)}d ${padZero(diffHour)}h ${padZero(
    diffMinutes
  )}m ${padZero(diffSecounds)}s`;
};

setInterval(CountDownToChristmas, 1000);
