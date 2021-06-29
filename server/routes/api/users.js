import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import keys from '../../config/keys.js'

import {
  registerUser,
  registerEmail,
  getUsers,
  authUser,
} from '../../controllers/userController.js'
import { protect, admin } from '../../middleware/authMiddleware.js'

const router = express.Router()

// @route POST api/users
// @desc Register user email
// @access Public
router.route('/email').post(registerEmail)
router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)

export default router
