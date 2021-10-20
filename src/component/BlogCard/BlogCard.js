import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css'

const BlogCard = (props) => {
    const { name, image, description } = props.blog
    return (
        <div>
            <div className="row blog-card">
                {/* Blog Card Img */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <img height="200px" width="200px" src={image} alt="" />
                </div>
                {/* Blog Card Details */}
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <h5>{name}</h5>
                    <p>{description.slice(0, 70)}....</p>
                    <Link to={`/blog}`}>
                        <button className="btn btn-outline-primary">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;