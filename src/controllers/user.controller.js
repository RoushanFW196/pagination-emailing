

const express=require("express");
const router= express.Router();
const sendMail=require("../utils/send-mail")

 const transporter=require("../configs/mail")
 const users=require("../models/user.model.js")
 router.get("/",async (req,res)=>{

    try{
   const page =+req.query.page ||1;
   const size = +req.query.size ||2;

   const skipitems=(page-1)*size;
    
 const allusers=await users.find().skip(skipitems).limit(size).lean().exec();

 const totaluserpages=Math.ceil( (await users.find().countDocuments())/size )

  



  return res.status(201).send({allusers,totaluserpages});
    }
    catch(e){
        return res.status(500).json({message:e.message,status:"failed"})
    }
 })



 router.post('/', async (req, res) => {
    try{

    console.log(req)
    const adduser= await users.create(req.body);
   const admin_arr=["pk@gmail.com","rk@gmail.com","nk@gmail.com","ak@gmail.com","mk@gmail.com"  ]
   const admin_str=admin_arr.join(",");
    


    sendMail("abc@server.com",admin_str,`${adduser.first_name} ${adduser.last_name} has registered with us`,`Please welcome ${adduser.first_name} ${adduser.last_name}` ,`<h1>Please welcome ${adduser.first_name} ${adduser.last_name}</h1>`)



    sendMail("abc@server.com",`${adduser.email}`,` Welcome to ABC system${adduser.first_name} ${adduser.last_name}  `,`hi ${adduser.first_name} please confirm your email` ,`<h1>hi ${adduser.first_name} please confirm your email</h1>`)

   // transporter.sendMail(message);


    res.send({adduser})
   }
   catch(e){
      return res.status(500).json({message:e.message,status:"failed"})
  }
 })







 module.exports=router;


