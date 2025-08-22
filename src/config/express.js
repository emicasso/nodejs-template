import userRoutes from '#Routes/user.routes.js';
import express from 'express';

const expressApp = express();

// middlewares
expressApp.use(express.json());

// Routes
expressApp.use('/users', userRoutes);

export default expressApp;
