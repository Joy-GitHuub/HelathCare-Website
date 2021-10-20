import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const url = `./doctors.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, [])

    return (
        <div className='container doctor-section'>
            {/* All Doctors Container */}
            <div className='col-lg-8 col-md-8 '>
                <h5 className='text-info'>MEET OUR EXPERIENCED TEAM</h5>
                <h2 className='text-primary'>Our Dedicated Doctors Team</h2>
                <h6 className='mt-5'>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff, We are all work together to help our all patients for recovery</h6>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4  mt-5 mx-auto">
                {
                    doctors?.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;