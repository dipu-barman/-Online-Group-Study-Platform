import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import PublicAssignment from '../Publicassignment/PublicAssignment';
import Footer from '../footer/Footer';
import Banner from '../banner/Banner';
import Section from '../Sectionpart/Section';
import Searchpart from '../Search/Searchpart';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Searchpart></Searchpart>
            <Banner></Banner>
            <PublicAssignment></PublicAssignment>
            <Outlet></Outlet>
            <div className='mt-10'>
                <Section></Section>
                 <Footer></Footer>
            </div>
           
        </div>
    );
};

export default Mainlayout;