const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const ProjectRoutes = require('./routes/ProjectRoutes');
const DonatorRoutes = require('./routes/DonatorRoutes');

app.use(cors());

app.use(express.json());

app.use(bodyParser.json({limit:'10mb'}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))

app.use('/projects',ProjectRoutes)
app.use('/donators', DonatorRoutes);


const DB = process.env.MONGO_URL.replace('<password>',process.env.MONGO_PASSWORD);
mongoose.connect(DB,{
    useNewUrlParser:true,
  useUnifiedTopology: true,
}).then((con)=>{
    console.log('connected to DB FINALLY');
}).catch((error)=>{
    console.log('errorr',error.message);
})


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ msg: 'Something went wrong!', status: false });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
}).on('error', (error) => {
    console.error('Error starting server:', error);
});



