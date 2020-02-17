
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
  
  const mongoUrl = 'mongodb+srv://fullstack:jihhuuwahhuu666@cluster0-gearx.mongodb.net/persons-app?retryWrites=true&w=majority'
  mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true})
  
  app.use(cors())
  app.use(express.json())

  const blogsRouter = require('./controllers/blogs')
  app.use('/api/blogs', blogsRouter)
  
  const PORT = 3003
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

  module.exports = app
  