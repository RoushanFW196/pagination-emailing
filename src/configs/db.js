

const mongoose=require('mongoose');

const connect= ()=>{
      return mongoose.connect("mongodb://localhost:27017/pagination",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    usecreateIndex:true,
    usefindAndModify:true,
})
};

module.exports=connect;






module.exports = ()=>{
    return mongoose.connect("mongodb://localhost:27017/pagination")
}


