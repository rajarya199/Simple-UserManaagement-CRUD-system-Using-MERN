import React from 'react'
import { FormGroup,FormControl,InputLabel,Input,Typography ,styled,Button} from '@mui/material'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { addUser} from '../service/api'
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

const AddUser = () => {

    const[user,setUser]=useState(defaultvalue)
    const navigate=useNavigate()
    const valueChange=(e)=>{
        // console.log( e.target.name,e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        
    }

    const addUserDetails= async()=>{
       await addUser(user)
       navigate('/users')

    }
  return (
    <>
    
    {/* //form control is a <div></div> */}
    <Container>
        <Typography varient ='h4'> Add User</Typography>
        
    <FormControl>
            <InputLabel> Name</InputLabel>
            <Input onChange={(e)=>valueChange(e)} name='name'/>
        </FormControl>
        <FormControl>
            <InputLabel>User Name</InputLabel>
            <Input onChange={(e)=>valueChange(e)} name='username'/>
        </FormControl>
        <FormControl>
            <InputLabel> Email</InputLabel>
            <Input onChange={(e)=>valueChange(e)} name='email' />
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>valueChange(e)} name='phone'/>
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={()=>addUserDetails()}>Add user </Button>
        </FormControl>
       
    </Container>
    </>
    
  )
}

export default AddUser