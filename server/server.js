const path =require('path');

const express = require('express');
const { response } = require('express');
// make an app
const app = express();
const  publicPath = path.join(__dirname, '..','public') 
// use the path for the application
app.use(express.static(publicPath));
// use the default file if the file is not found
app.get('*' , (req,res)=>{
res.sendFile(path.join(publicPath, 'index.html'));
});

// listen in the port 3000
app.listen(3000,()=>{
  console.log('we are live')
})