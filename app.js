const express = require('express')
const { generateImage } = require('./controllers/openaiController')

// App init
const app = express()
app.listen('4000', () => console.log('Listening on port 4000'))

// App middleware
app.use(express.json())
app.use(express.static('public'))

// App routes
app.post('/openai/image', generateImage)
