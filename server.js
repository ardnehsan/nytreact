const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 4000;

app.use(bodyParser({extended: true}))
app.use(bodyParser.json());
app.use(cors());


require('./routes/api')(app);

app.listen(port, ()=>{
    console.log("SERVER PORT: ", port);
});