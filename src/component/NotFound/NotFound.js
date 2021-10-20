import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/banner/1-10.png'

const NotFound = () => {
    return (
        // Not Found Section
        <div className="text-center p-5">
            <img height='200px' src={notFound} alt="" />
            <br />

            <Link to="/home">Back To Home</Link>

        </div>
    );
};

export default NotFound;