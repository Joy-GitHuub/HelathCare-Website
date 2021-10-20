import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const url = `./blog.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
    return (
        <div className='container my-3'>
            {/* Blog Section */}
            <h1 className='text-center text-primary'>Our Health Care Blogs</h1>
            <div className='row row-cols-1 row-cols-md-2 g-5 my-5'>
                {
                    blogs?.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;