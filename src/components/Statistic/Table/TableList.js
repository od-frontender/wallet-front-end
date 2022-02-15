import React from 'react';
import TableItem from './TableItem'
import Table from './Table'

function TableList(){
    const [posts, setPosts] = React.useState([
        {id:1, category:"Auto", sum:2456},
        {id:1, category:"Air", sum:52356},
        {id:1, category:"Family", sum:523},
        {id:1, category:"Kasino", sum:3234}
      ])
    return(
        <>
        <TableItem />
        {posts.map(post =>
        <Table post ={post} key={post.id}/>
        )}
        
        </>
    )
}

export default TableList;