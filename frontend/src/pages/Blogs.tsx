import BlogCard from '@/components/BlogCard'
import useBlogs from '@/hook'

const Blogs = () => { 
    const {loading, blogs} = useBlogs()
<<<<<<< HEAD
    
    if(loading) {
      return <div>loading...</div>
    }

    return (
      <div>
         {blogs.map(blog => <BlogCard 
            authorName={blog.author.name || ""}
            title ={blog.title}
            content={blog.content}
=======
  return (
    <div>
        <BlogCard 
            authorName={"Karan"}
            title ={"Title of the Blog"}
            content={"Content of th Blog"}
>>>>>>> 4151d3a753e66ae33ccd76031dd9d1f75988e1d2
            publishedDate={"11/11/1111"}
            />
         )}
      </div>
    )
}

export default Blogs