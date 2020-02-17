const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'lmao',
    author: 'juumies',
    url: 'fhihf//httpdsmkldjaso',
    likes: 1
  
  },
  {
    title: 'lol',
    author: 'juumies',
    url: 'fhihf//httpdsmkldjaso',
    likes: 1
  
  },
]

beforeEach(async () => {
  await Blog.deleteMany({})

  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()

  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
  
    expect(response.body.length).toBe(initialBlogs.length)
  })

test('HTTP POST worked correctly', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body.length).toBe(initialBlogs.length)
  let blogObject = new Blog(initialBlogs[3])
  await blogObject.save()
  expect(response.body.length).toBe(initialBlogs.length)

})

test('blog without content is not added', async () => {
  const newBlog = {
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)

  const response = await api.get('/api/blogs')

  expect(response.body.length).toBe(initialBlogs.length)
})

test('likes is zero if no value given', async () => {
  const newBlog = {
    title: 'lmao',
    author: 'juumies',
    url: 'fhihf//httpdsmkldjaso',
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)

    const response = await api.get('/api/blogs')

    const contents = response.body.map(r => r.likes)
    expect(contents).toContain(
      0
    )
})

test('no _id in database, instead id', async () => {
  const newBlog = {
    title: 'tihihi',
    author: 'eimies',
    url: 'fhihf//httpdsmkdsdsdsdsaso',
    likes: 8
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)

    const response = await api.get('/api/blogs')
    expect(response.body[response.body.length - 1].id).toBeDefined()
})


afterAll(() => {
  mongoose.connection.close()
})