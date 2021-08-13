require('dotenv').config()
//const functions = require("firebase-functions");
const express = require('express');
const cors= require('cors');
const stripe =require('stripe')("sk_test_51If6dESJW16KBy6Kakpdf56DdbtTDDGfGQgH6OD8vXw6m0fvE8ULeHxtVYnO9jv5maS6QWlt7AzoneervBMph9b700Wi5RUNSo");


//API





//APP CONFIG
const app=express();


// Middlewares
app.use(cors({origin:true}))
app.use(express.json());

//API routes
app.get('/',(req,res)=>res.status(200).send('hello world'))
app.get('/hello',(req,res)=>res.send("the shayne in the house"))


app.post('/payments/create',async(req,response)=>{
    const total=req.query.total;
    console.log('Payment successfully recieved the Shayne',total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
      });
    
      // OK - Created
      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
})


//added for heroku
app.listen(process.env.PORT,(req,res)=>console.log("app is running"))

//listen command
//exports.api=functions.https.onRequest(app)