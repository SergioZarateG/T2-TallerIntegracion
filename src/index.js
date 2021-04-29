const express = require('express');
const app = express();

// middlewares ->ayuda a procesar los datos antes que lleguen a las rutas
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('Server in localhost:3000');