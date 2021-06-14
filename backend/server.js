require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db');
const path = require('path')

const productRoutes = require('./routes/productRoutes')


connectDB()

const app = express()

app.use(express.json())

//Routes
app.use('/products', productRoutes)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('frontend/build'))
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

const PORT =  process.env.PORT ||5050

app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`)
})