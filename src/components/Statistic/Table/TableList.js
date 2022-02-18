import React from 'react';
import Media from 'react-media';
import TableItem from './TableItem';
import Table from './Table';
import CategoryList from '../Category/CategoryList';
import Balance from '../../Balance/Balance';
import Currency from '../../Currency';

function TableList() {
  const [posts, setPosts] = React.useState([
    { id: 1, category: 'Auto', sum: 2456 },
    { id: 2, category: 'Air', sum: 52356 },
    { id: 3, category: 'Family', sum: 523 },
    { id: 4, category: 'Kasino', sum: 3234 },
  ]);
  return (
    <>
      <Media query="(max-width: 768px)">
        {matches =>
          matches ? (
            <>
              <CategoryList />
              <TableItem />
              {posts.map(post => (
                <Table post={post} key={post.id} />
              ))}
            </>
          ) : (
            <>
              <Currency />
              <Balance />
              <CategoryList />
              <TableItem />
              {posts.map(post => (
                <Table post={post} key={post.id} />
              ))}
            </>
          )
        }
      </Media>
    </>
  );
}

export default TableList;
