import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


const Home = () => {
 const [products,setProducts]=useState([]);
//using useEffect to load the data in the beginning
useEffect(()=>{
  axios.get('https://dummyjson.com/products').then((res)=>{setProducts(res.data.products)}).catch((error)=>{
    console.log("error while fetching the data")
  })
},[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>productNumber</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Category&nbsp;(g)</TableCell>
            <TableCell align="right">Rating&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell align="right">{product.title}</TableCell>
              <TableCell align="right">{product.category}</TableCell>
              <TableCell align="right">{product.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Home
