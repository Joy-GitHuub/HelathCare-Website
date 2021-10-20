import React from 'react';
import { Link, useParams } from 'react-router-dom';

const AllServiceCard = (props) => {
    const { id, img, serviceName, } = props.service;

    const url = `AllserviceCard/${id}`

    return (
        <div>
            {/* All Service Section */}
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top top-service-img img-fluid" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{serviceName}</h4>
                        {/* <p className="card-text">{serviceDes}</p> */}
                    </div>
                    <div className="card-footer">
                        <Link to={url}>
                            <button type="button" className="btn btn-success px-5">Details <i className="fas fa-arrow-right"></i></button>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default AllServiceCard;