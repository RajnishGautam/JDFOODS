// import express from 'express'
// import { loginUser,registerUser } from '../controllers/userController.js'

// const userRouter=express.Router()

// userRouter.post("/register",registerUser)
// userRouter.post("/login",loginUser)

// export default userRouter;
import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';
import userModel from '../models/userModel.js'; // Import user model

const userRouter = express.Router();

// Register a new user
userRouter.post("/register", registerUser);

// Login an existing user
userRouter.post("/login", loginUser);

// Fetch all users (including name and email only)
userRouter.get('/list', async (req, res) => {
    try {
        // Fetch users excluding the password field
        const users = await userModel.find({}, { name: 1, email: 1 });
        res.json({ success: true, data: users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ success: false, message: 'Error fetching users' });
    }
});
//deleting user
userRouter.post("/remove", async (req, res) => {
    try {
      const { id } = req.body;
      const user = await userModel.findByIdAndDelete(id); // Delete user by ID
      if (user) {
        res.json({ success: true, message: "User removed successfully" });
      } else {
        res.status(404).json({ success: false, message: "User not found" });
      }
    } catch (error) {
      console.error('Error removing user:', error);
      res.status(500).json({ success: false, message: 'Error removing user' });
    }
  });
export default userRouter;
