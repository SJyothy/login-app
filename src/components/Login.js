import React from 'react';
import {FormControlLabel,Checkbox, FormControl, Button} from  '@mui/material';
import { TextField ,Grid} from '@mui/material';
import './Login.css';

const Login = ()=>{
    return(      
        <>
            <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
            className=".grid-container"
           
            >

            <FormControl class="form" color='primary'>
           
                Log in !<br/><br/>
                <TextField id="outlined-basic" label ="Email Address" variant='outlined' defaultValue='abcd@gmail.com'/><br/>
                 <TextField id="outlined-basic" label ="Password" variant='outlined' defaultValue='Enter Password'/><br/>
                 <FormControlLabel Value="end" control={<Checkbox/>} label="Remember Me" labelplacement="end"/>   Forgot Password?<br/>
                 <Button variant ='contained'>Login</Button>
             </FormControl>
             </Grid>
                
      
       </>
    );
}
export default Login;