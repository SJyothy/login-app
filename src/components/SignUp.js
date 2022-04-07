import React,{useState} from 'react'
import {FormControlLabel,Checkbox, FormControl, Button} from  '@mui/material';
import { TextField ,Grid} from '@mui/material';
import './Login.css';

 function SignUp() {

 /* const [data,setData]=useState({
    username:"",
   password:""});

    const {username,password} = data;

    const changeHandler = e =>{
      setData({...data,[e.target.name]:[e.target.value]})
    }

  const submitHandler = e =>{
      e.preventDefault();
      console.log(data);
  }*/
  return (
   <>
    <Grid
    container
    direction="column"
    justify="flex-end"
    alignItems="center"
    className=".grid-container"
   color="secondary"
    >

    <FormControl>
   
        Sign up !<br/><br/>
        <TextField id="outlined-basic" label ="Username" variant='outlined' defaultValue='Enter Name' /><br/>
        <TextField id="outlined-basic" label ="Email Address" variant='outlined' defaultValue='abcd@gmail.com'/><br/>
         <TextField id="outlined-basic" label ="Password" variant='outlined' defaultValue='Enter Password'/><br/>
         <FormControlLabel Value="end" control={<Checkbox/>} label="I accept the terms & conditions" labelplacement="end"/>  <br/>
         <Button variant ='contained' type="signup" className='button'>Sign up</Button>
     </FormControl>
     </Grid>
        

</>
  )
}
export default SignUp;