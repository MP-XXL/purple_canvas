class UserServices {

    async createUser(userData){
        try{

            if(!userData){
                throw new Error("User playload required")
            }

            if(userData.first_name.trim().length === 0){
                throw new Error("First Name required!")
            }

            return {
                data: userData.first_name
            }

        }catch(error){
            //return error.message
            throw new Error(`Failed: ${error.message}`)
        }

    }

}

module.exports = new UserServices()