import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import axios from 'axios';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const ViewStudent = () => {
  var [data,setData]= useState ([])
  var navigate = useNavigate();
   useEffect (()=>{
   axios.get("http://localhost:30010/view")
   .then((res)=>{
    console.log(res.data);
    setData(res.data)
   })
   .catch ((err)=>{console.log(err);
  })
  },[])

  const delValue = (id) =>{
    console.log("delete clicked");
    axios.delete("http://localhost:30010/remove/"+id)
    .then((res)=>{
     console.log(res)
    alert(res.data.message)
    window.location.reload(true)

    })
    .catch ((err)=>console.log(err))
   }
   const upValue = (value)=>{
    console.log("updated",value);
    navigate('/',{state:{value}});
    }
    
   
  return (
    <div>
      <Typography variant="h4" color={"primary"} style={{textAlign:"center"}}>Student Data</Typography>
       <TableContainer>
        <Table>
            <TableHead >
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>      
                    <TableCell>Rollno</TableCell>
                    <TableCell>Place</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((value,index)=>{
                    return(
                        <TableRow key={index}>
                            <TableCell>{value.s_name} </TableCell>
                            <TableCell>{value.s_age} </TableCell>
                            <TableCell>{value.s_rollno} </TableCell>
                            <TableCell>{value.s_place} </TableCell>
                            <TableCell>{value.s_dept} </TableCell>
                            <TableCell>
                              <Button variant='contained' color="error" onClick={()=>{delValue(value._id)}}>Delete</Button> &nbsp; 
                              <Button variant='contained' color="success" onClick={()=>{upValue(value)}}>Update</Button>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  )
}

export default ViewStudent
