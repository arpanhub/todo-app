const express = require('express');
const bodyParser = require('body-parser');
const { createTODO,updateTODO } = require('./types');
const app = express();

app.use(express.json());

app.post('/todo',function(req,res){
    const createPayload = req.body;
    const parsedPayLoad = createTODO.safeParse(createPayload)
    if(parsedPayLoad.success){
        res.status(411).json({
            msg:"you sent wrong data"
        })
        return;
    }
    
})
app.get('/todos',function(req,res){
    
})
app.put('/completed',function(resq,res){
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTODO.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg:"you sent wrong data"
        })
        return;
    }

})