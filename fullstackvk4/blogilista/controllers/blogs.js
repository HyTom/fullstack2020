const blogsRouter = require('express').Router()
const Blog = require('../models/blog.js')
  
  blogsRouter.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })

  blogsRouter.get('/:id', async (request, response) => {
    const blog = await Blog.findById(request.params.id)
    if (blog) {
      response.json(blog.toJSON())
    } else {
      response.status(404).end()
    }
  })
  
  blogsRouter.post('/', (request, response) => {

      const body = request.body
      if (body.title === undefined | body.url === undefined) {
        response.status(400).json('bad request')
      } else {
    const blog = new Blog({
        title: body.title,
        author:body.author,
        url: body.url,
        likes: body.likes === undefined ? 0 : body.likes,
    })
    
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      
    })
  }})

  blogsRouter.put('/:id', (request, response, next) => {
    const body = request.body
  
    const blog = {
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes
    }
  
    Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
      .then(updatedBlog => {
        response.json(updatedBlog.toJSON())
      })
      .catch(error => next(error))
  })

blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

  module.exports = blogsRouter