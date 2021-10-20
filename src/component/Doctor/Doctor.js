import React from 'react';

const Doctor = (props) => {
    const { role, img, doctorName } = props.doctor
    return (
        <div>
            {/* Doctors Card */}
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5>{doctorName}</h5>
                    <p className="card-text">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;