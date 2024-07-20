import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddStudent = (props) => {
  var [data,setData]= useState ({
    s_name:"",
    s_age:"",
    s_rollno:"",
    s_place:"",
    s_dept:"",
  });
  var navigate = useNavigate();
  var location = useLocation();
  console.log("location",location.state)
  useEffect(()=>{
    if(location.state!=null){
      setData({...data,
        s_name:location.state.value.s_name,
        s_age:location.state.value.s_age,
        s_rollno:location.state.value.s_rollno,
        s_place:location.state.value.s_place,
        s_dept:location.state.value.s_dept,
      });
    }
  },[]);
  const inputHandler = (e)=>{
    setData({...data,[e.target.name]:e.target.value});
    console.log(data);
  };
  const submitHandler = ()=> {
    console.log("button clicked");
    if(location.state!=null){
      axios
      .put("http://localhost:30010/edit/"+location.state.value._id,data)
      .then((res)=>{
        console.log(res);
        alert(res.data.message)
        navigate('/T')
      })
      .catch((err)=>{
        console.log(err);
      });
    }
    else{
      axios
      .post("http://localhost:30010/add",data)
      .then((res)=>{
        console.log(res);
        alert(res.data.message)
        navigate('/T')
      })
      .catch((err)=>console.log(err))
    }
  }
  return (
    <div style={{marginTop:"100px", marginLeft:"100px", marginRight:"100px"}}>
     <Grid container spacing={2}>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={4}></Grid>
      <TextField variant='outlined' fullWidth label='Name' onChange={inputHandler} name='s_name'value={data.s_name} />
      <br></br>
      <TextField variant='outlined' fullWidth label='Age'  onChange={inputHandler} name='s_age'value={data.s_age} />
      <br></br>
      <TextField variant='outlined' fullWidth  label='Roll No' onChange={inputHandler} name='s_rollno'value={data.s_rollno} />
      <br></br>
      <TextField variant='outlined'  fullWidth label='Place'  onChange={inputHandler} name='s_place'value={data.s_place}/>
      <br></br>
      <TextField variant='outlined' fullWidth label='Departement'  onChange={inputHandler} name='s_dept'value={data.s_dept}/>
      <br></br>
      <Button color='secondary' fullWidth variant='contained' onClick={submitHandler}>Submit</Button>
      </Grid> 
    </div>
  )
}

export default AddStudent
