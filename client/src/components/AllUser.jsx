import React ,{useEffect,useState} from 'react'
import{Table,TableBody,TableCell,TableHead,TableRow,styled,Button} from '@mui/material'
import { getUsers } from '../service/api'

const Styledtable=styled(Table)`
width:90%;
margin :50px auto 0 auto;
`

const Thead=styled(TableRow)`
background:#000000;
& >th{
color:#fff;
font-size:20px;
}
`
const TBody=styled(TableRow)`
  & >td{
  font-size:20px;

  }
`
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
    <Styledtable>
      <TableHead>
        <Thead>
          <TableCell>Id </TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>E-mail</TableCell>
          <TableCell> Phone</TableCell>
          <TableCell>Actions</TableCell>



        </Thead>

      </TableHead>
      <TableBody>
        {
          users.map((user,i)=>(
            <TBody key={i}>
              <TableCell> {i} </TableCell>
              <TableCell> {user.name} </TableCell>
              <TableCell> {user.username} </TableCell>
              <TableCell> {user.email} </TableCell>
              <TableCell> {user.phone} </TableCell>
              <TableCell> 
                <Button variant='contained' style={{marginRight:10}}>Edit</Button>
                <Button variant='contained' color='error'>Delete</Button>

              </TableCell>


            </TBody>
            
          ))
        }

      </TableBody>
    </Styledtable>
    </>
  )
}

export default AllUser