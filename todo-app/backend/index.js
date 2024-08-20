const express = require('express');
const bodyParser = require('body-parser');
const { createTODO } = require('./types');
const app = express();

app.use(express.json());

app.post('/todo',function(req,res){
    const createPayload = req.body;
    const parsedPayLoad = createTODO.safeParse(createPayload)
    if(parsedPayLoad.success){
        
    }
    
})
app.get('/todos',function(req,res){

})
app.put('/completed',function(resq,res){

})