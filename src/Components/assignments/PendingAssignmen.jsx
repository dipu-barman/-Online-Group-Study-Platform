import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import Phendingstudent from './Phendingstudent';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import axios from 'axios';
import Authcontext from '../contexts/Authcontext';

const PendingAssignmen = () => {

  const [asignmets, setAssignmets] = useState([]);
  console.log(asignmets)
  const { user } = use(Authcontext);

  // defualt useefft 
  // useEffect(() => {
  //   fetch('https://my-assignment-11-server-rouge.vercel.app/assignmentmark')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data) {
  //         const phendigdata = data.filter(phendig => phendig.status == 'phending')
  //         console.log(phendigdata)
  //         setAssignmets(phendigdata);
  //         // jwt token senfing
  //         // axios.post('https://my-assignment-11-server-rouge.vercel.app/assignmentmark',{ email:user.email },    { withCredentials: true })
  //         //   .then(res => {
  //         //     console.log(res.data)
  //         //   })
  //       }
  //       console.log(data)

  //     })
  // }, []);


  useEffect(() => {
  axios.get('https://my-assignment-11-server-rouge.vercel.app/assignmentmark',{user} ,{
    withCredentials: true 
  })
    .then(res => {
      const data = res.data;
      if (data) {
        const phendigdata = data.filter(phendig => phendig.status === 'phending');
        setAssignmets(phendigdata);
        console.log(phendigdata);
      }
    })
    .catch(error => {
      console.error("Error fetching pending assignments:", error);
    });
}, []);




  // jwt



  return (
    <div>

      <Navbar></Navbar>

      <div className='flex justify-center '>
        <p className='text-3xl font-bold text-center mt-14 '>ALL PHENDING ASSIGNMENTS  :{asignmets.length}</p>
        <button className='ml-20 mt-14 btn btn-secondary'>Status : PHENDING</button>
      </div>
      <div className='space-y-2 mb-16 mt-14'>




        {asignmets.map((ok, index) => <Phendingstudent key={ok._id} index={index} ok={ok}></Phendingstudent>)}
      </div>


      <div>
        <Footer></Footer>

      </div>
    </div>
  );
};

export default PendingAssignmen;