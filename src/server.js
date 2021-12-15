
const app=require('./index.js')
// const app= express();
// app.use(express.json());

 const connect=require("./configs/db.js");


console.log("hello")
app.listen(1400, async ()=>{
   await connect()
  console.log('listening on port 1400')
})











