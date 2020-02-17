const dummy = (blogs) => {
    let var1 = 1
    return var1
  }

const totalLikes = (blogs) => {
    let tlikes = 0
    blogs.map(blog => tlikes += blog.likes);
    if (blogs.lenght === 0) {
        return 0
    }
    return tlikes
}

const favoriteBlog = (blogs) => {
    let most = 0
    let titlep = ''
    blogs.map(blog => {
        if(blog.likes > most) {
            likes = most
            titlep = blog.title
        }
    })
    return titlep
}

const mostBlogs = (blogs) => {
    let most = 0
    let titlep = ''
    let a = []
    
    blogs.map(blog => {
        if(blog.likes > most) {
            likes = most
            titlep = blog.title
        }
    })
    return titlep
}

module.exports = {
    mostBlogs,
    dummy,
    favoriteBlog,
    totalLikes
  }