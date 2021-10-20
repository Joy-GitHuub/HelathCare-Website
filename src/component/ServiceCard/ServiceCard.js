import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const { serviceName, img, serviceDes, id } = props.service;

    const url = `/ServiceCard/${id}`

    return (
        <div>
            {/* Service Card Section */}
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top top-service-img img-fluid" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{serviceName}</h4>
                        {/* <p className="card-text">{serviceDes}</p> */}
                    </div>
                    <div className="card-footer">
                        <Link to={url}>
                            <button type="button" className="btn btn-success px-5">Details</button>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ServiceCard;