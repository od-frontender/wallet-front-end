import React from 'react';
import Media from 'react-media';
import TableItem from './TableItem';
import Table from './Table';
import CategoryList from '../Category/CategoryList';
import Balance from '../../Balance/Balance';
import Currency from '../../Currency';
import t from './Table.module.scss';

function TableList() {
  const [posts] = React.useState([
    { id: 1, category: 'Auto', sum: 2456 },
    { id: 2, category: 'Air', sum: 52356 },
    { id: 3, category: 'Family', sum: 523 },
    { id: 4, category: 'Kasino', sum: 3234 }
  ]);
  return (
    <>
      <Media query="(max-width: 767px)">
        {matches =>
          matches ? (
            <>
              <CategoryList />
              <TableItem />
              {posts.map(post => (
                <Table post={post} />
              ))}
            </>
          ) : (
            <section className={t.statistacs}>
              <Currency />
              <Balance />
              <CategoryList />
              <TableItem />
              {posts.map(post => (
                <Table post={post} key={post.id} />
              ))}
            </section>
          )
        }
      </Media>
    </>
  );
}

export default TableList;
