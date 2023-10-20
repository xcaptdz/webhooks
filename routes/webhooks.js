


const express = require('express')
const router = express.Router()
const request = require('axios');

//get webhook


router.get('/',(req,res)=>{

    res.status(200).json({ Message:  "Welcome to WebHooks API! 2.0"})  
})

 
router.post('/',(req,res)=>{

     const hook = req.body.hook
        console.log(`HA WebHook: ${hook}`)
        sendHook(hook)
        res.status(200).json({ hook:  hook})   
})




 

    
    
    function sendHook(hook) {
       //  request.post('http://'+ip+':8123/api/webhook/'+hook),data
       //  sample data request.post(url,data)
       //  const data = {
       //     name: 'John Doe',
       //     job: 'Content Writer'
       //   };


        let ip = '10.0.20.6'  //HA ip address 

        if (process.env.HA_IP != null && process.env.HA_IP != '' ) {
            ip = process.env.HA_IP;
        }


        
        request.post('http://'+ip+':8123/api/webhook/'+hook)
            .then((res) => {
                console.log(`HA Status: ${res.status}`);
                
            }).catch((err) => {
                console.error(err);
            });
    
       
    }




module.exports = router





