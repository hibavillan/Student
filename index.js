var express = require('express');
require('./connection');
var studmodel = require('./model/data');
var cors = require('cors');
const studModel = require('./model/data');
var app = express();

app.use(express.json());
app.use(cors());
app.post("/add",async(req,res)=>{
    try {
       await studmodel(req.body).save()
       res.send({message:"data added"});
    } catch (error) {
        console.log(error)
    }});
app.get("/view",async(req,res)=>{
    console.log("hi")
    try {
        var data = await studmodel.find()
        console.log(data)
        res.send(data);
    } catch (error) {
        console.log(error)
    }
})   
app.delete("/remove/:id",async(req,res)=>{
    var id = req.params.id
    console.log(id)
    try {
        await studModel.findByIdAndDelete(id);
        res.send({message:"Deleted Successfully!!!"})
    } catch (error) {
        console.log(error) 
    }
}) 
app.put("/edit/:id",async (req,res)=>{
    var id = req.params.id;
    try {
        var data = await studModel.findByIdAndUpdate(id,req.body);
        res.send({message:"data updated",data});
    } catch (error) {
        console.log(error)
        
    }
})
app.listen('30010',()=>{
    console.log("port is up and running!!")
})