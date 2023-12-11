import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams() 
    const { data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)

    return (
        <div className="blog-details">
            { isPending && <div>Loading</div> }
            { }
        </div>
    );
}
 
export default BlogDetails;