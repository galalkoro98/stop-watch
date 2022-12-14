import timeUnitData from "../data.js";
const timeComponent = () => {
  let timer = document.querySelector(".timerDisplay");
 
  let h =
    timeUnitData.hours < 10 ? "0" + timeUnitData.hours : timeUnitData.hours;
  let m =
    timeUnitData.minutes < 10
      ? "0" + timeUnitData.minutes
      : timeUnitData.minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    timeUnitData.milliseconds < 10
      ? "00" + timeUnitData.milliseconds
      : timeUnitData.milliseconds < 100
      ? "0" + timeUnitData.milliseconds
      : timeUnitData.milliseconds;

  timer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
};

export default timeComponent;
