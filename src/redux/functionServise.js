import dateFormat from 'dateformat';

export function userBalanсe(payload) {
  const data = payload.map(({ total, createdAt }) => {
    return { total, createdAt: dateFormat(createdAt, 'mm.dd.yy') };
  });

  const largestData = data.sort((a, b) => {
    return Date.parse(b.createdAt) - Date.parse(a.createdAt);
  });
  console.log(largestData);

  const result = largestData[0].total;
  console.log('result', result);
  return result;
}
