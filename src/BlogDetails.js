import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const history = useHistory();

    const handleClick = () => {
        fetch("http://https://my-json-server.typicode.com/b21827866/json/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push("/");
        })
    }

    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch("http://https://my-json-server.typicode.com/b21827866/json/" + id)
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading..</div> }
            { error && <div> {error} </div>}
            { blog &&
                <article>
                    <h2>{blog.title}</h2>
                    <p>Blog Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>}
        </div>
        
     );
}
 
export default BlogDetails;