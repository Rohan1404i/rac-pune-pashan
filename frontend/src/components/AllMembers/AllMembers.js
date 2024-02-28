import React, { useEffect, useState } from 'react';
import './AllMembers.css';
import TeamDetail from '../home/TeamDetail';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';

function AllMembers() {
    
 const[nonLeader,setNonLeader]= useState([]);


 const[Leader,setLeader]= useState([]);

const navigate =useNavigate();


  useEffect(()=>{
    async function getLeader() {
       const res =await axios.get('http://localhost:8000/user/getMember',{params:{isLeader:true},headers:{"x-api-key":1234567890123456}});
       setLeader(res.data)    
     }
   
     getLeader();
     },[]);


 useEffect(()=>{
    async function getNonLeader() {
       const res =await axios.get('http://localhost:8000/user/getMember',{params:{isLeader:false},headers:{"x-api-key":1234567890123456}});
       setNonLeader(res.data)    
     }
   
     getNonLeader();
     },[]);
  return (
    <div className="team flex-col" style={{width:"100%", height:"30vh"}} id="team">
      <Header />

<div className='flex-col'>

    
<p className="contTitle">Our community Leaders</p>

        {Leader?.map((teamsDetail) => (
            
              <TeamDetail teamsDetail={teamsDetail} key={teamsDetail._key} />
            ))}



</div>
    <div className='flex-col' style={{width:"100%", height:"30vh"}}>
      <p className="contTitle">Our community members</p>
          <div className='teamCont'>
            {nonLeader?.map((teamsDetail) => (
            
              <TeamDetail teamsDetail={teamsDetail} key={teamsDetail._key} />
            ))}
          </div>
    </div>
    </div>
  )
}

export default AllMembers