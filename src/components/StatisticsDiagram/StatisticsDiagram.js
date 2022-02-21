import s from './StatisticsDiagram.module.scss';

const StatisticsDiagram = () => {
  const colorsArr = [
    '#FED057',
    '#FFD8D0',
    '#FD9498',
    '#FF6596',
    '#C5BAFF',
    '#6E78E8',
    '#4A56E2',
    '#81E1FF',
    '#24CCA7',
    '#00AD84',
  ];
  const categoriesStats = [
    {
      category: 'basic',
      total: 100,
    },
    {
      category: 'products',
      total: 200,
    },
    {
      category: 'restaurant',
      total: 300,
    },
    {
      category: 'auto',
      total: 400,
    },
    {
      category: 'house',
      total: 500,
    },
    {
      category: 'development',
      total: 600,
    },
    {
      category: 'rest',
      total: 700,
    },
    {
      category: 'children',
      total: 800,
    },
    {
      category: 'animals',
      total: 900,
    },
    {
      category: 'other',
      total: 1000,
    },
  ];
  const totalSum = categoriesStats.reduce((acc, obj) => {
    return acc + obj.total;
  }, 0);

  let prevPercentage = 0;
  const diagramBackgroundStyle = {
    background: `conic-gradient(
    ${categoriesStats.map(({ total }, index) => {
      if (index === 0) {
        return (
          colorsArr[index] +
          ' 0% ' +
          ((total * 100) / totalSum).toFixed(1) +
          '%'
        );
      } else {
        prevPercentage += (categoriesStats[index - 1].total * 100) / totalSum;
        return (
          colorsArr[index] +
          ' ' +
          prevPercentage.toFixed(1) +
          '%' +
          ' ' +
          ((total * 100) / totalSum + prevPercentage).toFixed(1) +
          '%'
        );
      }
    })}
  )`,
  };
  console.log('diagramBackgroundStyle :>> ', diagramBackgroundStyle);

  return (
    <div className={s.my_pie_chart_container}>
      <div className={s.my_pie_chart} style={diagramBackgroundStyle}></div>
      {/* <div className={s.legenda}>
        {categoriesStats.map(({ category, total }, index) => (
          <div className={s.entry} key={index}>
            <div
              className={`${s.color_brown} ${s.entry_color}`}
              style={{ backgroundColor: colorsArr[index] }}
            ></div>
            <div className={s.entry_text}>{category}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default StatisticsDiagram;
