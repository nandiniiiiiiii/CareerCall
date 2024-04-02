const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {pythonShell, PythonShell} = require('python-shell');
const app = express();
const connectDB = require('./db/index.js');

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Hello world');
})

app.post('/data', (req, res) => {
  // console.log("hello")
  const inputData = req.body.value;
  console.log('Received input:', inputData);
  //connecting python
  let options = {
    scriptPath: "C:/Users/Manoj/Dropbox/My PC (LAPTOP-DT2730KE)/Desktop/git1/CareerCall/CareerCall/CareerCall/Backend/WebScraping",
    args: [inputData]
  }
  PythonShell.run("start.py",options).then(res=>{
    // if(error) console.log(error)
    // if(res) console.log(res)
    console.log(res)
  })
  // console.log("hogaya");
  // res.end(`<h1>${inputData}</h1>`)
  res.sendStatus(200);
});

dotenv.config({
  path: './env'
});

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
})
.catch((err)=>{
  console.log("MONGO db connection failed !!! ", err);
})

