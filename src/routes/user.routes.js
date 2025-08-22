import { Router } from 'express';

const userRoutes = Router();

userRoutes.post('/register');
userRoutes.post('/login');
userRoutes.get('/profile');
userRoutes.patch('/updateData');
userRoutes.patch('/updateEmail');
userRoutes.patch('/updatePassword');
userRoutes.delete('/unRegister');

export default userRoutes;
