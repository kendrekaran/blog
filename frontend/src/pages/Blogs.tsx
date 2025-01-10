import BlogCard from '@/components/BlogCard'
import useBlogs from '@/hook'

const Blogs = () => { 
    const {loading, blogs} = useBlogs()
    
    if(loading) {
      return <div>loading...</div>
    }

    return (
      <div>
         {blogs.map(blog => <BlogCard 
            authorName={blog.author.name || ""}
            title ={blog.title}
            content={blog.content}
            publishedDate={"11/11/1111"}
            />
         )}
      </div>
    )
}

export default Blogs