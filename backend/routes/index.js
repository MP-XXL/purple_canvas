const express = require("express")
const userRouter  = require("./usersRoute")

const rootRouter = express.Router()


rootRouter.use("/users", userRouter);

module.exports = rootRouter;