
const validateUserAuth=(req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            data:{},
            success:false,
            message:"Something went wrong",
            err:"Email or Password missing in the auth process"
        })
    }

    next();
}

const validateAdmin=(req,res,next)=>{
    if(!req.body.id){
        return res.status(400).json({
            data:{},
            success:false,
            err:"Id is missing to verify the user",
            message:"Something went wrong"
        })
    }
    next();
}

module.exports={
    validateUserAuth,
    validateAdmin
}