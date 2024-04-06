const express=require('express');
const bodyParser=require('body-parser');
const { PORT }=require('./config/serverConfig');
const apiRoutes=require('./routes/index');

// const dotenv=require('dotenv');

// const { User }=require('./models/index');
// const bcrypt=require('bcrypt');

// const UserRepository=require('./repository/user-repository');
// const userRepository=new UserRepository();

// const UserService=require('./services/user-service');
// const userService=new UserService();

const app=express();

const prepareAndStart=async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(PORT,async()=>{
        console.log(`Server Started at : ${PORT}`);

        // const inputPassword='1235';
        // const user=await User.findByPk(3);
        // const response=bcrypt.compareSync(inputPassword,user.password);
        // console.log(response);
        // const user=await userRepository.getById(3);
        // console.log(user);
        // const token=userService.createToken({email:'abdullah@admin.com',id:1});
        // console.log(token);
        // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiZHVsbGFoQGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE3MTI0MDQ4NTYsImV4cCI6MTcxMjQwODQ1Nn0.Ug34CXQMkBP83uopiLsqZB0_5_qsgkrTzj2PbBFV3VQ"
        // const user=userService.verifyToken(token);
        // console.log(user);
        // const res=await userRepository.getByEmail("abdullah@admin.com");
        // console.log(res);
        
    })
}

prepareAndStart();
