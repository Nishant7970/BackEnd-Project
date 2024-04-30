const express=require('express')
const connectToMongo=require('./db')
const app=express();
const port=5000;
var cors = require('cors');

app.use(cors());
app.use(express.json());
connectToMongo();

//Available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/note',require('./routes/notes'));

app.listen(port,()=>{
    console.log(`port is running at http://localhost:${port}`);
})

