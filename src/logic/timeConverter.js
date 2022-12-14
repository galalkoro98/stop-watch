import timeUnitData from "../data.js";

export const getTime = () => {
  timeUnitData.milliseconds = milliseconds + 10;
  if (timeUnitData.milliseconds == 1000) {
    timeUnitData.milliseconds = 0;
    timeUnitData.seconds++;
  }

  if (timeUnitData.seconds == 60) {
    timeUnitData.seconds = 0;
    timeUnitData.minutes++;
  }

  if (timeUnitData.minutes == 60) {
    timeUnitData.minutes = 0;
    timeUnitData.hours;
  }

  if (timeUnitData.hours == 24) {
    timeUnitData.hours = 0;
  }

  return timeUnitData;
};
