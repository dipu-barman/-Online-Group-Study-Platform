import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import PublicAssignment from '../Publicassignment/PublicAssignment';

import Footer from '../footer/Footer';
import Banner from '../banner/Banner';
import Section from '../Sectionpart/Section';
import Searchpart from '../Search/Searchpart';
import AssignmentTimeline from '../AssignmentTimeline';
import Newsletter from '../Newsletter';
import ProfessionalCarousel from '../ProfessionalCarousel';
import BookCollection from '../BookCollection';


const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
     
    
    {/* Banner button.. */}
            <Banner></Banner> 
            {/* search buuton */}
            {/* <Searchpart></Searchpart> */}
      {/* pubilc all assignment... */}
            <PublicAssignment></PublicAssignment>
            <Outlet></Outlet>
            <div className='mt-10'>
                <ProfessionalCarousel></ProfessionalCarousel>
                <BookCollection></BookCollection>
                <AssignmentTimeline></AssignmentTimeline>
                <Section></Section>
               {/* <Newsletter></Newsletter> */}
             
                 <Footer></Footer>
            </div>
           
        </div>
    );
};

export default Mainlayout;