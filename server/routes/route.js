import express from 'express';
import { addUser, getUser,getUserDetail ,editUser,deleteUser} from '../contoller/userController.js';
const router=express.Router()

router.post('/add',addUser)
router.get('/alluser',getUser)
router.get('/userdetail/:id',getUserDetail)
router.put('/editUserDetail/:id',editUser)
router.delete('/deleteuser/:id',deleteUser)
export default router