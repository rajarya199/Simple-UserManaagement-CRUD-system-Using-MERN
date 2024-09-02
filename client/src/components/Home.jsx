import React, { useState,useEffect } from 'react'
import{styled,Button} from '@mui/material'
import { getUsers} from '../service/api'

const Home = () => {
  const[users,setUsers]=useState([])
  useEffect(()=>{
    allUser()

  }
  ,[])
  const allUser=async()=>{
    let response=await getUsers()
    setUsers(response.data)
  }
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
       <div style={{ padding: '20px' }}>
      <h1 >Welcome to the User Management System</h1>
      <p style={{fontSize:'18px'}}>Manage user details with ease. Add, view, edit, and delete user information effortlessly.</p>

      <div style={{ margin: '20px 0' }}>
        <h2 >Features</h2>
        <ul style={{fontSize:'18px'}} >
          <li>Add Users: Quickly add new users with essential details.</li>
          <li>View All Users: Browse a list of all users in a tabular format.</li>
          <li>Edit and Delete Users: Update or remove user information as needed.</li>
        </ul>
      </div>

      <div style={{ display: 'flex', justifyContent:'space-between', maxWidth: '500px', margin: '20px 10px' }}>
        <Link to="/users">
        <Button variant='contained' style={{padding: '10px 20px', fontSize: '16px', cursor: 'pointer'}}>View All User</Button>

          {/* <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>View All Users</button> */}
        </Link>
        <Link to="/adduser">
         
          <Button variant='contained' style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Add New User</Button>
        </Link>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Summary</h2>
        <p style={{fontSize:'18px'}}>Total Users: {users.length}</p> 
        
      </div>
    </div>
    </div>
  )
}

export default Home

import { Link } from 'react-router-dom';


