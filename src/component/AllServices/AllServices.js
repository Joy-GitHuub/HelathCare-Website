import React, { useEffect, useState } from 'react';
import AllServiceCard from '../AllServiceCard/AllServiceCard';

const AllServices = () => {

    // All Service UseState
    const [allServices, setAllServices] = useState([]);


    // useEffect All Services.json Data...
    useEffect(() => {
        const url = `./allServices.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setAllServices(data))

    }, [])
    return (
        <div className='text-center container'>
            {/* All Services... */}
            <h1 className='text-primary mt-5'>This is All Services</h1>


            <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                {
                    allServices?.map(service => <AllServiceCard key={service.id} service={service}></AllServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;