import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams();

    const [services, setServics] = useState([]);

    useEffect(() => {
        fetch('/allServices.json')
            .then(res => res.json())
            .then(data => setServics(data))
    }, [id]);

    const service = services.find(s => s.id === id);
    const { img, serviceDes, serviceName } = service || {};



    return (
        <div className="container">
            {/* Service Details Section */}
            <div className="row d-flex align-items-center p-5">
                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                    <h3>{service?.name}</h3>
                    <p className="fw-bold fs-5 text-danger">Department: {serviceName}</p>
                    <p>{serviceDes}</p>
                    <Link to="/all-services">
                        <button className="btn btn-danger">All-Services<i class="fas fa-arrow-circle-right"></i></button>
                    </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img width="100%" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;