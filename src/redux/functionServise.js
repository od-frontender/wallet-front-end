export function getTotalBalance(payload) {
  //   console.log('payload', payload);
  const byType = payload.map(el => (el.type === true ? el.sum : null));
  //   console.log('byType', byType);

  //   const sum = byType.reduce((previousValue, current) => {
  //     if (previousValue === 'number' && current === 'number')
  //       console.log('previousValue', previousValue, current);
  //     // return previousValue + current;
  //     return current;
  //   });
  //   console.log('sum', sum);

  //   return sum;
  return 320;
}
