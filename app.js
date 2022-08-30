const express = require('express');
const expressLayouts = require('express-ejs-layouts')

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))

//Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/user'))

//EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')
