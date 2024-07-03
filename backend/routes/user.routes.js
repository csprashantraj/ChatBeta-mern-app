import express from 'express';
import { getUsersforSidebar } from '../controllers/user.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/', protectRoute, getUsersforSidebar);

export default router;