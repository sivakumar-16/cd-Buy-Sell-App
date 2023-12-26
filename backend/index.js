const express=require ('express')
const app=express();
const mongoose=require('mongoose')
const cors =require('cors');
const { stringify } = require('querystring');

app.use(express.json())
app.use(cors())

const url='mongodb://localhost:27017/BuySellApp'

const connectDB= mongoose.connect(url).then(
    console.log("DB Connected")
)

const schema= new mongoose.Schema({
    email:String,
    password:String
})

const Data= mongoose.model("user",schema)

//Test

// const data1= new Data({
//     name:"Siva",
//     password:"Sivakumar"
// })

// data1.save()

app.post('/login', function(req,res){
  Data.create(req.body).then(
    res.send("user added successfully")
  )
})



app.get("/register",function(req,res){
    Data.find().then(
        user=>
    res.send(user)
    )
})




app.listen(8080,function(){
    console.log("running at 8080")
})