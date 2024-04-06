const express=require('express');
const bodyParser=require('body-parser');
const { PORT }=require('./config/serverConfig');
const apiRoutes=require('./routes/index');

// const { User }=require('./models/index');
// const bcrypt=require('bcrypt');

// const UserRepository=require('./repository/user-repository');
// const userRepository=new UserRepository();

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
        
    })
}

prepareAndStart();
