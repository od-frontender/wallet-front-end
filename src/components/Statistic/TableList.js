import React from 'react';
import Media from 'react-media';
import TableItem from './TableItem';
import Table from './Table';
import Balance from '../Balance/Balance';
import Currency from '../Currency';
import t from './Table.module.scss';

function TableList() {

  return (
    <>
      <Media query="(max-width: 767px)">
        {matches =>
          matches ? (
            <>
              <TableItem />

              
                <Table />
              

            </>
          ) : (
            <section className={t.statistacs}>
              <Currency />
              <Balance />
              <TableItem />
             
                <Table  />
              
            </section>
          )
        }
      </Media>
    </>
  );
}

export default TableList;
