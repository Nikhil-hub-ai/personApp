import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const Add = ({user}) => {
const [form,setForm]=useState({
    productID:'',
    productName:'',
    productCategory:'',
    productRating:0
  });
  let SubmitForm=()=>{
    console.log(form);
  }
  let valueUpdate=(e)=>{
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
   <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="outlined-basic" label="ProductID*" variant="outlined" name="productID" value={form.productID} onChange={valueUpdate}/>
      <TextField id="outlined-basic" label="Name*" variant="outlined"  name="productName" value={form.productName} onChange={valueUpdate}/>
      <TextField id="filled-basic" label="Category*" variant="filled" name="productCategory" value={form.productCategory} onChange={valueUpdate} />
      <TextField id="standard-basic" label="Rating*" variant="standard" name="productRating" value={form.productRating} onChange={valueUpdate} />
      <Stack spacing={2} direction="row">
      <Button variant="contained"onClick={SubmitForm}>Submit</Button>
    
    </Stack>
    </Box>

  )
}

export default Add
