
interface BlogCardProps{
    authorName : string
    title : string
    content : string
    publishedDate : string
}

const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
} : BlogCardProps
) => {
  return (
    <div className="flex items-center justify-center">
        <div className="p-10 flex items-start flex-col justify-center ">
            <div>
                <Avatar name={authorName} /> {authorName} . {publishedDate}
            </div>
            <div>
                {title}
            </div>
            <div>
                {content.slice(0,100) + "..."}
            </div>
            <div>
                {`${Math.ceil(content.length/100)} minutes`}
            </div>
        </div>
    </div>
  )
}

export default BlogCard

function Avatar({name} : {name  : string}){
    return(
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-sm  text-gray-300">
                {name[0]}
            </span>
        </div>
    )
}