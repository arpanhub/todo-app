const express = require('express');
// const bodyParser = require('body-parser');
const { createTODO,updateTODO } = require('./types');
const app = express();
const todo = require('./db');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/todo', async function(req,res){
    const createPayload = req.body;
    const parsedPayLoad = createTODO.safeParse(createPayload);
    if(!parsedPayLoad.success){  
        res.status(411).json({
            msg: "you sent wrong data",
            errors: parsedPayLoad.error.errors  // Provide detailed error information
        })
        return;
    }
    await todo.create({
        title:parsedPayLoad.data.title,
        description:parsedPayLoad.data.description,
        Completed:false
    })
    res.json({
        msg:"TODO created"
    })
    
})
app.get('/todos',async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})
app.put('/completed',async function(resq,res){
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTODO.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg:"you sent wrong data"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        Completed:true
    })
    res.json({
        msg:"TODO updated"
    })
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})