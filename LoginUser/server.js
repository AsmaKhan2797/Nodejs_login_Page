const express = require('express');
const app =express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const dB = require('./config/config').databaseURI;
//Database 
console.log('ddddddddddddddddd :' +dB);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(dB, { useNewUrlParser: true})

//mongoose.connect(dB,{useNewUrlParser  : true})
    .then(()=>{ console.log('Database Connected.........')})
    .catch(err => console.log( err));
//Views 
app.use(expressLayouts);
app.set('view engine','ejs');
//bodyParser
app.use(express.urlencoded ({extended:false}));
// Router
app.use('/',require('./routes/index'));
app.use('/user',require('./routes/users'));
const PORT= process.env.PORT || 5050;

app.listen(PORT,console.log(`npServer Started on Port ${PORT}`));