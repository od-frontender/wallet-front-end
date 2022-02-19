import dateFormat from 'dateformat';

export function getUserBalance(payload) {
  // const data = payload.map(({ total, createdAt }) => {
  //   return { total, createdAt: dateFormat(createdAt, 'mm.dd.yy h:MM:ss ') };
  // });

  // data.sort((a, b) => {
  //   return Date.parse(b.createdAt) - Date.parse(a.createdAt);
  // });
  const lastData = payload.sort((a, b) => a.getTime() - b.getTime());
  const result = lastData[0].total;
  return result;
}
