const express = require('express');
const app = express();
const port = 3001;

const requestTime = function(req,res,next){
    console.log("Kirti is checking");
    req.requestTime = Date.now();
    next();
}

app.use(requestTime);

app.get('/',(req,res)=>{
    let responseText = `Hello World!<br>`
    responseText+=`<small>Requseted at : ${req.requestTime}</small>`;
    res.send(responseText);
})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
    
});
