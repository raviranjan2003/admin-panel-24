import axios from "axios";
import React from "react";
import "./profile.css";
import { useState } from "react";
import { Upload } from "@progress/kendo-react-upload";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../API/api";
import Loader from "../components/Loader/Loader";

function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const user_id = localStorage.getItem("coordinatorId");
  const [userPhoto, setUserPhoto] = useState(null);
  const [sizeMsg, setSizeMsg] = useState(null);
  const [coordinator, setCoordinator] = useState(null);
  const [sizeErr, setSizeErr] = useState(false);
  const notify = (msg) =>
    toast.success(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
        setCoordinator(res.data.coordinator);
      });
  };

  const uploadPhoto = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("coordinatorPhoto", userPhoto);
    await axios
      .post(`${baseUrl}/coordinator/updatephoto/${user_id}`, formData)
      .then((result) => {
        setIsLoading(false);
        if (result.status === 208) {
          setSizeMsg(result.data.message);
          setSizeErr(true);
          setTimeout(() => {
            setSizeMsg(null);
            setSizeErr(false);
          }, 2000);
          return;
        }
        const res = result;
        notify(res.data.message);
      });
  };
  return (
    <div style={{ width: "100%", height: "100%", marginTop: "20px" }}>
      {isLoading && <Loader />}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div
        className="ProfileWrapper"
        style={{
          width: "100%",
          display: "flex",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="content">
          <div className="detail">
            <div className="image_container">
              {coordinator?.coordinatorPhoto && (
                <img
                  className="profile_image"
                  src={`${baseUrl}/${coordinator?.coordinatorPhoto}`}
                  alt="profile_image"
                />
              )}
            </div>
            <div className="designation">
              <h1 className="designation_heading">{coordinator?.coordinatorName}</h1>
              <p className="designation_content">{coordinator?.coordinatorType} Coordinator</p>
            </div>
            <div className="button">
              <a
                href={`mailto:${coordinator?.coordinatorEmail}`}
                className="email"
              >
                {/* <HiOutlineMail /> */}
                <span className="email">Email</span>
              </a>
              <a
                href={`tel:${coordinator?.coordinatorPhone}`}
                className="phone"
              >
                <span className="phone">Phone</span>
              </a>
            </div>
            <div className="coordinator_details">
              <h3>Details</h3>
              <p>Email: {coordinator?.coordinatorEmail}</p>
              <p>Phone: {coordinator?.coordinatorPhone}</p>
              <p>Branch: {coordinator?.coordinatorBranch}</p>
              <p>Coordinator Type: {coordinator?.coordinatorType}</p>
            </div>
          </div>
        </div>
      </div>
      {!coordinator?.coordinatorPhoto && (
        <div className="update_photo">
          Profile Picture:
          <input
            id="profile-upload"
            style={{ border: "none", width: "250px" }}
            type="file"
            onChange={(e) => setUserPhoto(e.target.files[0])}
            accept="image/*"
          />
          {sizeErr && (
            <p style={{ color: "red", display: "inline" }}>{sizeMsg}</p>
          )}
          <button
            style={{
              marginTop: "20px",
              border: "2px solid green",
              padding: "5px",
            }}
            onClick={uploadPhoto}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
