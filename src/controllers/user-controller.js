const UserService=require('../services/user-service');

const userService=new UserService();

const create=async(req,res)=>{
    try {
        const user=await userService.create({
            email:req.body.email,
            password:req.body.password
        });
        return res.status(200).json({
            data:user,
            success:true,
            message:"Successfully created a user",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a user",
            err:error
        })
    }
}

const signIn=async(req,res)=>{
    try {
        const token=await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            data:token,
            message:"Successfully signed in",
            success:true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to signed in",
            err:error
        })
    }
}

module.exports={
    create,
    signIn
}