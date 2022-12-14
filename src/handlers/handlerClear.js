import timeUnitData from "../data.js";
import getTime from "../logic/timeConverter.js";
import timeComponent from "../components/time.js";

export const clearHandler = () => {
  const cls = clearInterval(timeUnitData.watchInterVal);
  [timeUnitData] = [
    timeUnitData.hours,
    timeUnitData.minutes,
    timeUnitData.seconds,
    timeUnitData.milliseconds,
  ];
};
