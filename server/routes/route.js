import express from 'express';
import { addUser, getUser } from '../contoller/userController.js';
const router=express.Router()

router.post('/add',addUser)
router.get('/alluser',getUser)
export default router