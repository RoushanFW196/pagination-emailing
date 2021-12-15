

const mongoose= require('mongoose');


const userschema= new mongoose.Schema({

    first_name:{type: String, required: true},
    last_name:{type: String, required: true},
    email:{type: String, required: true},
})


const user=mongoose.model("user",userschema);

module.exports =user;