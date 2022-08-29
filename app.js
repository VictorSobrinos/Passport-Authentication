const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))

//Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/user'))
