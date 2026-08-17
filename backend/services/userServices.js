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
            throw new Error(`${result.error}`)
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
            throw new Error(`${validatedPassword.error}`)
        }


        const hashedPassword = await bcrypt.hash(validatedPassword.data, saltRounds).then(function(hash){
            return hash
        })

        result.data.password = hashedPassword;

        const foundUser = await prisma.users.findUnique({
            where: {
                email: result.data.email
            }
        })

        if (foundUser != null){
            throw new Error(`Email not accepted`)
        }

        const createdUser = await prisma.users.create({
            data:{
                first_name: result.data.first_name, 
                last_name: result.data.last_name,
                email: result.data.email, 
                password: result.data.password
            }
        })

        return`Account created successfully! Welcome ${createdUser.first_name}`


    }

}

module.exports = new UserServices()