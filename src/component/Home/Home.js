import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import TopServices from '../TopServices/TopServices'

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <TopServices></TopServices>
            <Doctors></Doctors>
            <Contact></Contact>
        </div>
    );
};

export default Home;