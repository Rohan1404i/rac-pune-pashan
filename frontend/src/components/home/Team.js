import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Team.css";
import TeamDetail from "./TeamDetail";
import axios from "axios";
import President from '../../assets/president.png';

function Team() {


 const[Leader,setLeader]= useState([]);

const navigate =useNavigate();

  useEffect(()=>{
       axios.get('http://localhost:8000/user/getMember',{params:{isLeader:true},headers:{"x-api-key":1234567890123456}})
       .then(resp => {
          setLeader(resp.data);
          console.log("resp data: ",resp.data);
       })
       .catch(err => console.log(err.message))

      },[]);


  return (
    <div>
      <div className="team" id="team">
        {/* <ImageKit path="tattoo49.jpg" /> */}
        {Leader?.length === 0 ? (
          <div className="team-container">
            {/* --------------CARD STARTS---------- */}
            <div className="card">
              <div className="content">
                <img src={President} alt="Team President" width="250px" height="auto" style={{overflow:"hidden"}} />
                <h2>Rtr. Pooja Patil</h2>
                {/* <a
                  className="facebook"
                  href="https://business.facebook.com/Inkronicle-Tattoo-100734155945680/?business_id=1103419690207120"
                  target="_blank"
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  className="instagram"
                  href="https://www.instagram.com/inkronicletattoo/"
                  target="_blank"
                >
                  <FaInstagram size={30} />
                </a> */}
              </div>
            </div>
          </div>
        ) : (
          Leader?.slice(0,3)?.map((teamsDetail) => {
            return (
              <TeamDetail teamsDetail={teamsDetail} key={teamsDetail} />
            );
          })
        )}
      </div>
      <div className="btn-teams">
        <button
          onClick={() => {
            navigate('team/all')
          }}
        >
          View Whole Team
        </button>
      </div>
    </div>
  );
}

export default Team;
