import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Myassignment from './Myassignment';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

const Attemtedassignment = () => {
    //  const [selectedDate, setSelectedDate] = useState(new Date());

    const [asignmets, setAssignmets] = useState([]);
      console.log(asignmets)
      
        useEffect(() => {
          fetch('http://localhost:3000/assignmentmark')
            .then(res => res.json())
            .then(data => {
              if(data){
               const phendigdata= data.filter(phendig=>phendig.status=='Complete')
               console.log(phendigdata)
                 setAssignmets(phendigdata);
              }
              console.log (data)
              
            })
        }, [])


       




    return (
        
        <div>
          
<div>
  <Navbar></Navbar>
</div>


<div>
  
   
</div>
<div className='mt-14 mb-14'>
  {asignmets.map((student,index)=><Myassignment index={index} student={student}></Myassignment>)}
</div>




                <Footer></Footer>
            
        </div>
    );
};

export default Attemtedassignment;