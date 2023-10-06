const express = require('express')
const app = express()
const request = require('request');

app.get('/',(req,res)=>{
   
    
    let hook = req.query.hook;
    
    if ((hook != null ) && (hook != "") ){
     res.status(200).send(hook)

     let ip = '10.0.20.6'
      
     if (process.env.HA_IP != null && process.env.HA_IP != '' ) {
        ip = process.env.HA_IP;
    
    }



      request.post({ headers: {'content-type' : 'text/html'}
     , url: 'http://'+ip+':8123/api/webhook/'+hook,
      body: "" }
     , function(error, response, body){
     console.log(hook)
     console.log(ip)
     }); 
 
           
    } else  {

        res.status(200).send("Welcome to WebHooks Router for HA!")
    }

   
  



  
})


 

app.get('*',(req,res)=>{

    res.status(200).send("Welcome to WebHooks Router for HA!")

})





app.listen(5000)