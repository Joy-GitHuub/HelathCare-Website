import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const TopServices = () => {
    const [topServices, setTopServices] = useState([]);


    useEffect(() => {
        const url = `./topservices.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setTopServices(data))

    }, [])
    return (
        // Top Services Container
        <div className='text-center container mb-5'>
            <h3>OUR SERVICES</h3>
            <h5>Special High-Quality Services</h5>
            <p>Since its founding Brivona has been providing its patients with the full medical care, encompassing outpatients services, is neurology, laboratory, imaging diagnostics and more.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {
                    topServices?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default TopServices;