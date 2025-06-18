import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import PublicAssignmetCard from './PublicAssignmetCard';
//  import jwtDecode from "jwt-decode";

const PublicAssignment = () => {

  //  const initialitems = useLoaderData()
  //   const [items,setitems]=useState(initialitems)
 
// const token = localStorage.getItem("access-token");
// const decoded = jwtDecode(token);
// console.log(decoded.email); // If the token has an email field

const [asignmets, setAssignmets] = useState([]);

  useEffect(() => {
    fetch('https://my-assignment-11-server-rouge.vercel.app/assignmets')
      .then(res => res.json())
      .then(data => {
          setAssignmets(data);
      })
  }, [])
  return (
    
    <div>
      <h3 className='text-3xl font-bold text-center mt-14 mb-10'>  ASSIGNMENT DEMO {asignmets.length}</h3>
      <div className=' w-9/12 gap-7 mx-auto grid grid-cols-2'>
        {
          asignmets.map(assignmet =><PublicAssignmetCard key={assignmet._id} assignmet ={assignmet} asignmets={asignmets} setAssignmets={setAssignmets}></PublicAssignmetCard>)
        }
      </div>
    </div>
  );
};

export default PublicAssignment;