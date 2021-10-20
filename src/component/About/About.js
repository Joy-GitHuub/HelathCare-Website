import React from 'react';
import about from '../../images/banner/about.jpg'

const About = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>About-US</h1>
            <div className='d-flex align-items-center'>
                {/* About Section Img */}
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img className='img-fluid' src={about} alt="" />
                </div>

                {/* About Details */}
                <div className='ms-5 col-lg-6 col-md-5 col-sm-12'>
                    <p className='text-info'>Square Health is a healthcare services aggregator aiming to digitalize healthcare services. Square Health has launched its flagship service, Jotno; a one-stop destination for caregivers and patients.

                        It is our core belief that healthcare should be readily accessible by the millions of people residing in Bangladesh. With the use of technology, we aim to do just that; connect and bridge caregivers and the patients so that the people can live better and healthier lives.

                        We understand that patient care starts with the caregivers. It is thus imperative that the caregivers operate at the cutting edge of technology so that they can spend more time on the patients and make their practice/institution more professional. In order to address that, we have launched Jotno Expert; a platform for doctors to manage their appointments and write prescriptions digitally. The data is backed up in real-time, encrypted and safely stored away on the cloud; saving the caregiver the hassle of dealing with storage of files and folders and never losing patient histories again.</p>
                </div>
            </div>
        </div>
    );
};

export default About;