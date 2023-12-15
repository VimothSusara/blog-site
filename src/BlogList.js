import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  //   const blogs = props.blogs; (destructure instead)

  return (
    <div className="blog-list">
      {blogs.length === 0 ? (
        <div className="main-no-blog">
          <img src="../sad.png" alt="" className="no-blogs-img" />
          <div className="empty-blogs">No Blogs Available</div>
        </div>
      ) : (
        blogs.map((blog) => (
          <div className="blog-preview " key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by: {blog.author}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
