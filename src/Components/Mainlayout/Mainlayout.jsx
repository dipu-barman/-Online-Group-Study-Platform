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
     
     {/* search buuton */}
            <Searchpart></Searchpart>
    {/* Banner button.. */}
            <Banner></Banner>
      {/* pubilc all assignment... */}
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