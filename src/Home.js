import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const{data: blogs, isPending, error} = useFetch("http://https://my-json-server.typicode.com/b21827866/json");

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Blogs" handleDelete={handleDelete} /> */}

        </div>
    );
}
 
export default Home;