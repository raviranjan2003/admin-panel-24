import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../API/api";
import Loader from "../components/Loader/Loader";
function Profile() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  const user_id = localStorage.getItem("coordinatorId");

  const [coordinator, setCoordinator] = useState(null);
  useEffect(() => {
    getCoodinator();
  }, []);
  const getCoodinator = async () => {
    setIsLoading(true);
    await axios
      .get(`${baseUrl}/coordinator/getById/${user_id}`)
      .then((result) => {
        setIsLoading(false);
        const res = result;
        // alert(JSON.stringify(res.data.coordinator))
        setCoordinator(res.data.coordinator);
      });
  };
  return (
    <div style={{ width: "100%", height: "100%", marginTop: "20px" }}>
    {isLoading && <Loader/>}
      <div
        className="ProfileWrapper"
        style={{
          width: "50%",
          display: "flex",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div>
          <img src="/dummy.jpg" alt="" width="300px" />
        </div>
        <div
          className="profileInfo"
          style={{
            width: "90%",
            margin: "0px auto",
            textAlign: "left",
            marginLeft: "40px",
          }}
        >
          <h1 style={{ fontSize: "50px", margin: "10px 0px" }}>
            {" "}
            Name: {coordinator?.coordinatorName}
          </h1>
          <h2 style={{ fontSize: "20px" }}>
            {" "}
            E-mail: {coordinator?.coordinatorEmail}
          </h2>
          <h2 style={{ fontSize: "20px" }}>
            {" "}
            Phone: {coordinator?.coordinatorPhone}
          </h2>
          <h2 style={{ fontSize: "20px" }}>
            Branch :{coordinator?.coordinatorBranch}
          </h2>
          <h2 style={{ fontSize: "20px" }}>
            Coordinator Type:{coordinator?.coordinatorType}
          </h2>
        </div>
        {/* <button style={{marginTop:"20px",border:"2px solid green",padding:"5px"}} onClick={()=>navigate('/profileupdate')}>Update</button> */}
      </div>
    </div>
  );
}

export default Profile;
