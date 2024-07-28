import express from 'express';
import { authRoutes } from './authRoutes';
import { userRoutes } from './userRoutes';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

export { router as apiRoutes };
