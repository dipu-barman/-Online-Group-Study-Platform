import React from 'react';
import { Link } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

const Phendingstudent = ({ok,index}) => {
    console.log(ok)
    return (
        <div>
          
            

              <div className='bg-[#0F0F0F26] border-2  p-3 rounded-2xl w-10/12 mx-auto  mb-8' >

              <button className='btn btn-block btn-outline'> Suject name :</button>
               
                <div className='flex justify-between'>
                 <div className='pt-4 flex gap-3'>
                  <p className='border-2  p-3 rounded-2xl'> NO :{index+1}</p>
                  <p className='mt-4'> ROLL-NO: {ok._id}</p>
                 </div>
                 <div className='border-l-2 pl-5 pt-5'>
                  <p>name :{ok.student}</p>
                  <p>email :{ok.email}</p>
                 </div>
                 <div className='border-l-2 pl-5 pt-5'>
                  <p>mark :{ok.mark}</p>
                  <p>date :{ok.date} </p>
                 </div>
                 <div className='mt-4'>
                   <Link to={`/mark/${ok._id}`}><button className='btn btn-primary'>
                              Give mark
                          </button></Link>
                 </div>
                </div>



            </div>

           
        </div>
    );
};

export default Phendingstudent;