const timeCalc = (date) => {
  let today = new Date();
  date = new Date(date);

  let time = (today.getTime() - date.getTime()) / 1000 / 60; // min
  if (time < 1) return "방금 전";
  if (time < 60) return parseInt(time) + "분 전";
  time /= 60; // hour
  if (time < 24) return parseInt(time) + "시간 전";
  time /= 24; // day
  return parseInt(time) + "일 전";
};

export default timeCalc;
