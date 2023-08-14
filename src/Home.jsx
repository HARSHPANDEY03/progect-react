import { useEffect, useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    let blogs = [];
    const blogsJson = localStorage.getItem('blogs');
    if (blogsJson) {
      blogs = JSON.parse(blogsJson);
    }
    setBlogs(blogs);
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="my-3">My Latest Blogs</h2>
        </div>
        {blogs.map((blog, idx) => (
          <div className="col-sm-4" key={idx}>
            <div className="card">
              <div className="card-body">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
