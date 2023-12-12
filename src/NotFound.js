import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 style={{
                fontSize: '80px',
                fontWeight: 'bold',
            }}>404</h1>
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to Homepage</Link>
        </div>
    );
}
 
export default NotFound;