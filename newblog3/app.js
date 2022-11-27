const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const path = require('path');

const connection = require('./database/connection');
const pagesRouter = require('./routes/PagesRoutes');
const router = require('./routes/PostRoutes');
const UserRouter = require('./routes/UserRoutes');

const app = express()
const PORT = 4000

app.set('views', 'views')
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connection()

app.use('/api', router)
app.use('/', pagesRouter)
app.use('/', UserRouter)

app.listen(PORT, () => console.log(`Server is listening on port: http://localhost:${PORT}`))