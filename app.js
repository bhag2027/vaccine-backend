const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {vaccinemodel} = require("./models/addvacc")


const app=express()

app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://bhagya:bhagya20@cluster0.gszky.mongodb.net/vaccinedb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/",(req,res)=>{
    let input=req.body
    let vaccine=new vaccinemodel(input)
    vaccine.save()
     res.json({"status":"success"})
})

app.post("/search",(req,res)=>{
    let input=req.body
    vaccinemodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input=req.body
    vaccinemodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json("error")
        }
    )
})
app.post("/view",(req,res)=>{
    vaccinemodel.find().then(
     (data)=>{
         res.json(data)
     }
    ).catch(
     (error)=>{
         res.send(error)
     }
    )
 })







app.listen(8080,()=>{
    console.log("server started")
})

