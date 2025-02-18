import { BACKEND_URL } from '@/config'
import axios from 'axios'
import  { useEffect, useState } from 'react'

interface Blog{
    map(arg0: (blog: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
    "content" : string
    "title" : string
    "id" : number
    "author" : {
        "name" : string
    }
}

const useBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog>([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response =>{
                setBlogs(response.data.blogs)
                setLoading(false)
            })
    }, [])

    return{
        loading,
        blogs
    }
}

export default useBlogs