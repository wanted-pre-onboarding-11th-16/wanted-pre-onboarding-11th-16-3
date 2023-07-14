export const parseDate = (date: Date) => {
  const dateObject = new Date(date);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDay();

  return `${year}년 ${month}월 ${day}일`;
};
