import { useState, useEffect } from "react";
import BlogList from "./BlogList";

export type Blog = {
  title: string,
  body: string,
  author: string,
  id: number
}

const HomePage = () => {

    const [blogs, setBlogs] = useState<Blog[]>([])
    const url = 'http://localhost:8000/blogs'
 
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setBlogs(data))
    }, [url])

    return ( 
        <div className="content">
            { blogs && <BlogList blogs={blogs} />}
        </div>
     );
}
 
export default HomePage;