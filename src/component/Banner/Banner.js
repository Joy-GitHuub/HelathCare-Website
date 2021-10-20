import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-section mb-5'>
            {/* Banner Sectionn */}
            <div className='banner-header text-center'>
                <h1>Best Treatment and <br /><span> Happy Life</span></h1>
                <h5>
                    We push the limits
                    of what's possible
                    for our patients</h5>
                <h6>Need professional help? Our support staff will answer your questions. Visit us Now or Make an Appointment!</h6>

                <button type="button" className="btn btn-outline-dark mt-5 px-4">MAKE AN APPOINTMENT <i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Banner;