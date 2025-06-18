import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Phendingstudent from './Phendingstudent';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

const PendingAssignmen = () => {

  const [asignmets, setAssignmets] = useState([]);
  console.log(asignmets)
  
    useEffect(() => {
      fetch('https://my-assignment-11-server-rouge.vercel.app/assignmentmark')
        .then(res => res.json())
        .then(data => {
          if(data){
           const phendigdata= data.filter(phendig=>phendig.status=='phending')
           console.log(phendigdata)
             setAssignmets(phendigdata);
          }
          console.log (data)
          
        })
    }, [])
  
    return (
        <div> 

          <Navbar></Navbar>

          <div className='flex justify-center '>
            <p className='text-3xl font-bold text-center mt-14 '>ALL PHENDING ASSIGNMENTS  :{asignmets.length}</p>
            <button className='ml-20 mt-14 btn btn-secondary'>Status : PHENDING</button>
 </div>
<div className='space-y-2 mb-16 mt-14'>
  
         
          
  
  {asignmets.map((ok,index) =><Phendingstudent key={ok._id} index={index} ok={ok}></Phendingstudent> )}
</div>
           

            <div>
               <Footer></Footer> 
                
            </div>
        </div>
    );
};

export default PendingAssignmen;