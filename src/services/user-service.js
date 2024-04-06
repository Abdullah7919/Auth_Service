const UserRepository=require('../repository/user-repository');
const jwt=require('jsonwebtoken');

const { JWT_KEY }=require('../config/serverConfig');
const res = require('express/lib/response');

class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }

    async create(data){
        try {
            const user=await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Somethin went wrong on service layer");
            throw error;
        }
    }

    createToken(user){
        try {
            const token=jwt.sign(user,JWT_KEY,{ expiresIn: '1h' })
            return token;
        } catch (error) {
            console.log("Somethin went wrong on creating Token");
            throw error;
        }
    }

    verifyToken(token){
        try {
            const response=jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("Somethin went wrong on token validation",error);
            throw error;
        }
    }

    checkPassword(plainTextPassword,hashTextPassword){
        try {
            const response=bcrypt.compareSync(plainTextPassword,hashTextPassword);
            return response;
        } catch (error) {
            console.log("Somethin went wrong on creating Token");
            throw error;
        }
    }
}

module.exports=UserService;