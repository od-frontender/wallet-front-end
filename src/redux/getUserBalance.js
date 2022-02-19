import dateFormat from 'dateformat';

export function getUserBalance(payload) {
  const sortedByDateArr = payload.sort((a, b) => {
    return Date.parse(b.createdAt) - Date.parse(a.createdAt);
  });

  const result = sortedByDateArr[0].total;
  return result;
}

const data = [
  {
    _id: '620948123ef416aac0e01164',
    type: true,
    sum: 160,
    total: 640,
    month: 1,
    year: 2022,
    category: 'basic',
    createdAt: '2022-02-13T18:04:02.616Z',
    updatedAt: '2022-02-13T18:04:02.616Z',
  },
  {
    _id: '62096ed6af3d08d18eb43646',
    type: true,
    sum: 160,
    total: 960,
    month: 1,
    year: 2022,
    category: 'basic',
    createdAt: '2022-02-13T20:49:26.879Z',
    updatedAt: '2022-02-13T20:49:26.879Z',
  },
  {
    _id: '62096ed7af3d08d18eb43649',
    type: false,
    sum: 160,
    total: 1120,
    month: 1,
    year: 2022,
    category: 'basic',
    createdAt: '2022-02-13T20:49:27.883Z',
    updatedAt: '2022-02-13T20:49:27.883Z',
  },
  {
    _id: '620c07633d06dff5d3094174',
    type: true,
    sum: 3000,
    total: 3520,
    month: 1,
    year: 2022,
    category: 'basic',
    createdAt: '2022-02-15T20:04:51.489Z',
    updatedAt: '2022-02-15T20:04:51.489Z',
  },
  {
    _id: '620c082a3d06dff5d3094181',
    type: false,
    sum: 280,
    total: 3240,
    month: 1,
    year: 2022,
    category: 'basic',
    createdAt: '2022-02-15T20:08:10.687Z',
    updatedAt: '2022-02-15T20:08:10.687Z',
  },
  {
    _id: '620c0ae03d06dff5d309418e',
    type: true,
    sum: 600,
    total: 3840,
    month: 1,
    year: 2022,
    category: 'basic',
    createdAt: '2022-02-15T20:19:44.545Z',
    updatedAt: '2022-02-15T20:19:44.545Z',
  },
  {
    _id: '620c0b133d06dff5d3094193',
    type: false,
    sum: 1500,
    total: 2340,
    month: 1,
    year: 2022,
    category: 'basic',
    createdAt: '2022-02-15T20:20:35.531Z',
    updatedAt: '2022-02-15T20:20:35.531Z',
  },
  {
    _id: '620c0bbe3d06dff5d309419e',
    type: true,
    sum: 60,
    total: 2400,
    month: 1,
    year: 2022,
    category: 'basic',
    createdAt: '2022-02-15T20:23:26.836Z',
    updatedAt: '2022-02-15T20:23:26.836Z',
  },
];
getUserBalance(data);

// const data = payload.map(({ total, createdAt }) => {
//   return { total, createdAt: createdAt };
// });
