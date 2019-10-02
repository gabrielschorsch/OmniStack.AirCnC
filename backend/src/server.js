const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://Schorsch:205600@omnistack-2quj7.mongodb.net/test?retryWrites=true&w=majority', {
   useNewUrlParser:true,
   useUnifiedTopology:true
})
//req.query = Acessar query Params
//req.params = Acessar route params
//req.body = Acessar body params

app.use(express.json())
app.use(routes);

app.listen(3333);

