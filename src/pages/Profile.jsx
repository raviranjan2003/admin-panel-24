import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../API/api';
function Profile() {
    const navigate = useNavigate();
  const user_id = localStorage.getItem("coordinatorId");
  const [coordinator, setCoordinator] = useState(null);
    useEffect(async () => {
             await axios.get(`${baseUrl}/coordinator/getById/${user_id}`).then((result) => {
          const res = result;
          // alert(JSON.stringify(res.data.coordinator))
          setCoordinator(res.data.coordinator);
        });
      },[])
  return (
    <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
      <div className="ProfileWrapper" style={{width:"50%",margin:'0px auto',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <img src="/dummy.jpg" alt="" width="200px" />
        <div className="profileInfo" style={{width:"90%",margin:"0px auto",textAlign:"center"}}>
            <h1 style={{fontSize:"50px",margin:"10px 0px"}}>{coordinator?.coordinatorName}</h1>
            <h2 style={{fontSize:"20px"}}>{coordinator?.coordinatorEmail}</h2>
            <h2 style={{fontSize:"20px"}}>{coordinator?.coordinatorPhone}</h2>
            <h2 style={{fontSize:"20px"}}>{coordinator?.coordinatorName}</h2>
            <h2 style={{fontSize:"20px"}}>{coordinator?.coordinatorBranch}</h2>
            <h2 style={{fontSize:"20px"}}>Coordinator Type:{coordinator?.coordinatorType}</h2>
        </div>
        <button style={{marginTop:"20px",border:"2px solid green",padding:"5px"}} onClick={()=>navigate('/profileupdate')}>Update</button>
      </div>
    </div>
  )
}

export default Profile;
