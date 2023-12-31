import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id , {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {blog && (
        <article>
          <h2>{ blog.title }</h2>
          <div>{ blog.body }</div>
          <p>Written by: { blog.author }</p>
          <button onClick={ handleDelete }>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
