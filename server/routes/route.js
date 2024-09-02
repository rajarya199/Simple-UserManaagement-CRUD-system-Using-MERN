import express from 'express';
import { addUser, getUser,getUserDetail ,editUser} from '../contoller/userController.js';
const router=express.Router()

router.post('/add',addUser)
router.get('/alluser',getUser)
router.get('/userdetail/:id',getUserDetail)
router.put('/editUserDetail/:id',editUser)
export default router