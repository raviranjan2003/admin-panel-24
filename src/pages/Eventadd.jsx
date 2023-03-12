import React, { useEffect, useState } from "react";
import "./Eventadd.css";
import axios from "axios";
import { baseUrl } from "../API/api";
import Loader from "../components/Loader/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Eventadd = () => {
  const [startDate, setStartDate] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventPhoto, setEventPhoto] = useState(null);
  const [eventDescription, setEventDescription] = useState("");
  const [studentCoordinator1, setStudentCoordinator1] = useState("");
  const [studentCoordinator2, setStudentCoordinator2] = useState("");
  const [eventMode, setEventMode] = useState("");
  const [domainId, setDomainId] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  const [ePrizeWorth, setEPrizeWorth] = useState("");
  const [coordinators, setCoordinators] = useState(null);
  const [domains, setDomains] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}/coordinator/get`)
      .then((result) => {
        const res = result.data;
        setCoordinators(res);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
    axios
      .get(`${baseUrl}/domain/getAllDomains`)
      .then((result) => {
        const res = result.data;
        setDomains(res);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  }, []);

  const postData = async () => {
    const studentCoordinator = [studentCoordinator1, studentCoordinator2];
    console.log("coooor", studentCoordinator);
    console.log("covfdxddvooor", eventPhoto);
    console.log("coooodfr", eventName);
    console.log("coooofsdfdszr", eventDescription);
    let formData = {
      eventName: eventName,
      eventDescription: eventDescription,
      eventPhoto: eventPhoto,
      studentCoordinator: studentCoordinator,
      eventMode: eventMode,
      domainId: domainId,
      driveLink: driveLink,
      eventVenue: eventVenue,
      startDate: startDate,
      ePrizeWorth: Number(ePrizeWorth),
    }; /*
    formData.append("eventName", eventName);
    formData.append("eventDescription", eventDescription);
    formData.append("eventPhoto", eventPhoto);
    formData.append("studentCoordinator", studentCoordinator);
    formData.append("eventMode", eventMode);
    formData.append("domainId", domainId);
    formData.append("driveLink", driveLink);
    formData.append("eventVenue", eventVenue);
    formData.append("startDate", startDate);
    formData.append("ePrizeWorth", Number(ePrizeWorth));*/

    setIsLoading(true);
    console.log("form", formData);
    await axios.post(`${baseUrl}/event/create`, {
      eventName: eventName,
      eventDescription: eventDescription,
      eventPhoto: eventPhoto,
      studentCoordinator: studentCoordinator,
      eventMode: eventMode,
      domainId: domainId,
      driveLink: driveLink,
      eventVenue: eventVenue,
      startDate: startDate,
      ePrizeWorth: Number(ePrizeWorth),
    }).then((result) => {
      setIsLoading(false);
      const res = result;
      console.log("res", res);
      // notify(res.data.message);
    });
  };
  return (
    <div className="eventAdd">
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
      <div className="heading">Add Event</div>
      <div className="eventItems">
        <label>
          Domain Name :
          <select
            // className={styles.signup__select}
            sx={{ height: "10px" }}
            onChange={(e) => setDomainId(e.target.value)}
            // id='branch'
            name="role"
            // value={branch}
            required
          >
            <option value="0">Select</option>
            {domains?.map((item) => {
              // console.log(item)
              return <option value={item._id}>{item.domainName}</option>;
            })}
          </select>
        </label>
        <label>
          Event Name :{" "}
          <input
            name="eventName"
            onChange={(e) => setEventName(e.target.value)}
          />
        </label>
        <label>
          Event Drive Link :{" "}
          <input name="drive" onChange={(e) => setDriveLink(e.target.value)} />
        </label>
        <div className="photoUpload">
          Event Picture:
          <input
            style={{ border: "none", paddingLeft: "4em" }}
            type="file"
            onChange={(e) => setEventPhoto(e.target.value)}
            accept="/Image/*"
          />
        </div>
      </div>
      <div
        style={{ width: "auto", justifyContent: "right", textAlign: "center" }}
      >
        Event Description (max 50 words)
        <br />
        <textarea
          name="description"
          cols="40"
          rows="5"
          onChange={(e) => setEventDescription(e.target.value)}
        >
        </textarea>
      </div>

      <div className="container">
        <div>
          <div className="container-head">Event Co-ordinator - 1</div>
          <div className="eventBox">
            <select
              // className={styles.signup__select}
              sx={{ height: "10px" }}
              onChange={(e) => setStudentCoordinator1(e.target.value)}
              // id='branch'
              name="role"
              // value={branch}
              required
            >
              {coordinators?.map((item) => {
                // console.log(item)
                return <option value={item._id}>{item.coordinatorName}</option>;
              })}
            </select>
          </div>
        </div>

        <div>
          <div className="container-head">Event Co-ordinator - 2</div>
          <div className="eventBox">
            <select
              // className={styles.signup__select}
              sx={{ height: "10px" }}
              onChange={(e) => setStudentCoordinator2(e.target.value)}
              // id='branch'
              name="role"
              // value={branch}
              required
            >
              {coordinators?.map((item) => {
                // console.log(item)
                return <option value={item._id}>{item.coordinatorName}</option>;
              })}
            </select>
          </div>
        </div>

        <div>
          <div
            className="container-head"
            style={{ marginBottom: "1.8em" }}
          >
          </div>
          <div className="eventBox">
            <div className="eventItems">
              <label>
                Date :{" "}
                <input
                  type="date"
                  name="date"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>
            </div>
            <div className="eventItems">
              <label>
                Mode :
                <select
                  // className={styles.signup__select}
                  sx={{ height: "10px" }}
                  onChange={(e) => setEventMode(e.target.value)}
                  // id='branch'
                  name="role"
                  // value={branch}
                  required
                >
                  <option value="0">Select</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </label>
            </div>
            <div className="eventItems">
              <label>
                Venue :{" "}
                <input
                  name="venue"
                  onChange={(e) => setEventVenue(e.target.value)}
                />
              </label>
            </div>
            <div className="eventItems">
              <label>
                Prize Worth :{" "}
                <input
                  name="prize"
                  onChange={(e) => setEPrizeWorth(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="submit-btn" onClick={postData}>
        Submit
      </button>
    </div>
  );
};

export default Eventadd;