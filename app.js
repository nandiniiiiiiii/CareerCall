require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')


const PORT = process.env.PORT || 8000

const app = express()

app.get('/', (req, res) => {
    res.json({
        success: true
    })
})


app.listen(PORT, () => {
    console.log(`Server Running At At ${PORT}`)
})