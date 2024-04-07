const express=require('express');
const UserController=require('../../controllers/user-controller');
const { AuthRequestValidator }=require('../../middlewares/index');
const UserService = require('../../services/user-service');


const router=express.Router();

router.post(
    '/signup',
    AuthRequestValidator.validateUserAuth,
    UserController.create
);
router.post(
    '/signin',
    AuthRequestValidator.validateUserAuth,
    UserController.signIn
);

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
);

module.exports=router;