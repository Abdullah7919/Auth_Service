const express=require('express');
const { PORT }=require('./config/serverConfig');

const app=express();

const prepareAndStart=async()=>{

    app.listen(PORT,()=>{
        console.log(`Server Started on : ${PORT}`);
    })
}

prepareAndStart();
