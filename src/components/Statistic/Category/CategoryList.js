import React from 'react';
import Category from './Category';
// import ButtonYears from './components/Statistic/ButtonYears';

function CategoryList() {
  const [posts] = React.useState([
    { id: 1, title: 'Год' },
    { id: 2, title: 'Месяц' }
  ]);
  return (
    <div className="">
      {posts.map(post => (
        <Category post={post} key={post.id} />
      ))}
    </div>
  );
}

export default CategoryList;
