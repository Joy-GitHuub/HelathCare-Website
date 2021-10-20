import React, { useEffect, useState } from 'react';
import AllDoctorsCard from '../AllDoctorsCard/AllDoctorsCard';

const AllDoctors = () => {

    // Use Start AllDoctors....
    const [allDoctors, setAllDoctors] = useState([]);

    // Use Effect ..
    useEffect(() => {
        const url = `./alldoctors.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setAllDoctors(data))

    }, [])
    return (

        // Doctors Scetion
        <div className='container my-5'>
            <h1 className='text-center'>This is Doctors</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4  mt-5 mx-auto ">
                {/* Doctor Map */}
                {
                    allDoctors?.map(doctor => <AllDoctorsCard key={doctor.id} doctor={doctor}></AllDoctorsCard>)
                }
            </div>
        </div>
    );
};

export default AllDoctors;