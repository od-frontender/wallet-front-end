import React from 'react';
import Media from 'react-media';

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
  

              
                <Table />
              

            </>
          ) : (
            <section className={t.statistacs}>
              <Currency />
              <Balance />
             
                <Table  />
              
            </section>
          )
        }
      </Media>
    </>
  );
}

export default TableList;
