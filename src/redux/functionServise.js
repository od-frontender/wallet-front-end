import dateFormat from 'dateformat';

export function userBalanсe(payload) {
  const data = payload.map(({ total, createdAt }) => {
    return { total, createdAt: dateFormat(createdAt, 'mm.dd.yy h:MM:ss ') };
  });

  const largestData = data.sort((a, b) => {
    return Date.parse(b.createdAt) - Date.parse(a.createdAt);
  });
  const result = largestData[0].total;
  return result;
}
