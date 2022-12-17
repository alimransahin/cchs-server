const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port= process.env.PORT || 5000;
require('dotenv').config()

const app=express();


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vgokw2y.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const students=client.db('cchs').collection('students');

        app.get('/application', async(req,res)=>{
            const studentInfo=req.body;
            const result=await students.insertOne(studentInfo);
        })

    }
    finally{
       
    }
}
run().catch(console.log);


app.use(cors());
app.use(express.json())

app.get('/', async(req,res)=>{
    res.send('app running')
});
app.listen(port,()=>console.log(`CCHS Server running on port:${port}`))

