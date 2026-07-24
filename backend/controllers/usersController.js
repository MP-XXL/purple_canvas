// const express = require('express')
const UserServices =  require("../services/userServices")





class UserController{
    
    
    async createUser(req, res, next){
        try {
            
            const { first_name, last_name, email, password } = req.body;
            const newUser = await UserServices.createUser({ first_name, last_name, email, password })

            res.status(200).json({success: true, data: newUser})

        }catch(error){
            res.status(400).json({success: false, message: `Failed to create: ${error}`})
            // next(error)
        }
    }
}

module.exports = new UserController();