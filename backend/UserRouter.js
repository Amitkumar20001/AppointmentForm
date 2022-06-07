import express from 'express';
import User from './UserModel.js';

const userRouter = express.Router();
userRouter.post('/register', async(req,res) => {

    const {name,email,phone,date} = req.body;
    if(!name || !email || !phone || !date)
    {
        res.status(422).json({error: "Please fill the required field"});
    }
    try{
   
      const userData = new User({name ,email ,phone ,date });
      const isSaved = await userData.save();

      if(isSaved){
          res.status(200).json({message: "User registered successsfully"});
      }else{
          res.status(500).json({message: "Some error occurred, Please try again"})
      }
    }catch(err){
        console.log(err);
    }
})
export default userRouter;