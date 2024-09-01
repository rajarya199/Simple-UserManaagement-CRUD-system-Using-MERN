import React ,{useEffect,useState} from 'react'
import{Table,TableBody,TableCell,TableHead,TableRow} from '@mui/material'
import { getUsers } from '../service/api'
const AllUser = () => {
  const[users,setUsers]=useState([])
useEffect(()=>{
  getAllUsers()
},[])


//response -dat a send to frontend frm backend
const getAllUsers= async()=>{
  let response= await getUsers() 
  setUsers(response.data)
}
  return (
    <>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id </TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>E-mail</TableCell>
          <TableCell> Phone</TableCell>

        </TableRow>

      </TableHead>
      <TableBody>
        {
          users.map((user,i)=>(
            <TableRow key={i}>
              <TableCell> {i} </TableCell>
              <TableCell> {user.name} </TableCell>
              <TableCell> {user.username} </TableCell>
              <TableCell> {user.email} </TableCell>
              <TableCell> {user.phone} </TableCell>

            </TableRow>
            
          ))
        }

      </TableBody>
    </Table>
    </>
  )
}

export default AllUser