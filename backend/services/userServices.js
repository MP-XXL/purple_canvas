const  z  = require("zod");
const bcrypt = require("bcrypt");
const saltRounds = 12;
const prisma =  require("../config/prisma")


class UserServices {

    async createUser(userData){
        const userSchema = z.object({
            first_name: z.string().trim().nonempty(),
            last_name: z.string().trim().nonempty(),
            email: z.email().trim().nonempty(),
            password: z.string().trim().nonempty()
        })

        const result = userSchema.safeParse(userData)
        if (!result.success){
            return result.error.message
        }

        const passwordSchema = z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(/[A-Z]/, "Password must contain an uppercase letter")
            .regex(/[a-z]/, "Password must contain a lowercase letter")
            .regex(/[0-9]/, "Password must contain a number")
            .regex(/[^A-Za-z0-9]/, "Password must contain a special character");
        
        const validatedPassword = passwordSchema.safeParse(userData.password)
        if(!validatedPassword.success){
            return validatedPassword.error.message
        }


        const hashedPassword = await bcrypt.hash(validatedPassword.data, saltRounds).then(function(hash){
            return hash
        })

        result.data.password = hashedPassword;

        return result


    }

}

module.exports = new UserServices()