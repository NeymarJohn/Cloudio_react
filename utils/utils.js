export const compareDateWithCurrent = (compareDate) => {
  const givenDateTime = new Date(compareDate);
  const currentDateTime = new Date();
  const isGivenDateTimeAfterCurrent =
    givenDateTime.getTime() > currentDateTime.getTime();

  return isGivenDateTimeAfterCurrent;
};

export const fromCurrentFarawayDate = (expire_time) => {
  const now = new Date();
  const targetDate = new Date(now.getTime() + expire_time * 1000);
  let yyyy = targetDate.getFullYear();
  let mm = String(targetDate.getMonth() + 1).padStart(2, "0");
  let dd = String(targetDate.getDate()).padStart(2, "0");
  let hh = String(targetDate.getHours()).padStart(2, "0");
  let MM = String(targetDate.getMinutes()).padStart(2, "0");
  let SS = String(targetDate.getSeconds()).padStart(2, "0");
  let result = `${yyyy}-${mm}-${dd} ${hh}:${MM}:${SS}`;
  return result;
};

export const getYearAndMonth = (date) => {
  // date format is 2023-06-12-05:04:18.460000
  const result = date.slice(0, 10);
  return result;
};
