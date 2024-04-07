const UserRepository=require('../repository/user-repository');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

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

    async signIn(email,plainTextPassword){
        try {
            // step 1 -> fetch the user using email
            const user=await this.userRepository.getByEmail(email);
            // step 2 -> compare the incoming plain password with store encrypted password
            const passwordMatch=this.checkPassword(plainTextPassword,user.password);

            if(!passwordMatch){
                console.log("password dosn't match");
                throw {error:'Incorrect password'}
            }

            // step 3 -> If password match create token and send it to the user
            const token =this.createToken({
                email:user.email,
                id:user.id
            });
            return token;
        } catch (error) {
            console.log("Somethin went wrong in the singin process");
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

    checkPassword(plainTextPassword,hashPassword){
        try {
            const response=bcrypt.compareSync(plainTextPassword,hashPassword);
            return response;
        } catch (error) {
            console.log("Somethin went wrong on compare the password");
            throw error;
        }
    }
}

module.exports=UserService;