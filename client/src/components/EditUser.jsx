import React from 'react'
import { FormGroup,FormControl,InputLabel,Input,Typography ,styled,Button} from '@mui/material'
import { useState,useEffect } from 'react'
import {useNavigate,Link,useParams} from 'react-router-dom'
import { addUser,getUserdetail,editUser} from '../service/api'
const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& >div {
margin-top:20px} `

const defaultvalue={
    name:" ",
    username:'',
    email:'',
    phone:''
}

const EditUser = () => {

    const[user,setUser]=useState(defaultvalue)
    const navigate=useNavigate()
    const{id}=useParams();

    useEffect(()=>{
        loadUserDetails();

    },[])

    const loadUserDetails=async()=>{
        const response=await getUserdetail(id);
        setUser(response.data)
    
    }
    const valueChange=(e)=>{
        // console.log( e.target.name,e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        
    }

    const editUserDetail= async()=>{
       await editUser(user,id)
       navigate('/users')

    }
  return (
    <>
    
    {/* //form control is a <div></div> */}
    <Container>
        <Typography varient ='h4'> Add User</Typography>
        
    <FormControl>
            <InputLabel> Name</InputLabel>
            <Input onChange={(e)=>valueChange(e)} name='name' value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>User Name</InputLabel>
            <Input onChange={(e)=>valueChange(e)} name='username' value={user.username}/>
        </FormControl>
        <FormControl>
            <InputLabel> Email</InputLabel>
            <Input onChange={(e)=>valueChange(e)} name='email' value={user.email} />
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>valueChange(e)} name='phone' value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={()=>editUserDetail()}>Update user </Button>
        </FormControl>
       
    </Container>
    </>
    
  )
}

export default EditUser