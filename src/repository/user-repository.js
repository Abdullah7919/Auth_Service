const { User }=require('../models/index');

class UserRepository {

    async create(data){
        try {
            const user=await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on the repository");
            throw error;
        }
    }

    async destroy(userId){
        try {
            await User.destroy({
                where:{
                    id:userId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong on the repository");
            console.log(error);
        }
    }
}

module.exports=UserRepository;