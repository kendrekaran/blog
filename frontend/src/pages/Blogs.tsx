import BlogCard from '@/components/BlogCard'

const Blogs = () => {
    const {loading, blogs} = useBlogs()
  return (
    <div>
        <BlogCard 
            authorName={"Karan"}
            title ={"Title of the Blog"}
            content={"Content of th Blog"}
            publishedDate={"11/11/1111"}
            />
    </div>
  )
}

export default Blogs