const express = require('express')
const UserController  = require("../controllers/usersController")

const userRouter = express.Router()


userRouter.post("/register", UserController.createUser);

module.exports = userRouter;