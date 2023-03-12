import React, { useEffect, useState } from 'react';
import './Workshopadd.css';
import axios from 'axios';
import { baseUrl } from '../API/api';
import Loader from '../components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Workshopadd = () => {
  const [coordinators, setCoordinators] = useState(null);
  const [workshopName, setWorkshopName] = useState(null);
  const [workshopDescription, setWorkshopDescription] = useState(null);
  const [workshopPhoto, setWorkshopPhoto] = useState(null);
  const [domainCoor1, setDomainCoor1] = useState(null);
  const [domainCoor2, setDomainCoor2] = useState(null);
  const [workshopVenue, setWorkshopVenue] = useState(null);
  const [workshopDate, setWorkshopDate] = useState(null);
  const [workshopTime, setWorkshopTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const notify = (msg) => toast.success(msg, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });


  useEffect(async () => {
    setIsLoading(true);
    await axios
      .get(`${baseUrl}/coordinator/get`)
      .then((result) => {
        setIsLoading(false);
        const res = result;
        setCoordinators(res.data);
      })
      .catch((err) => {
        notify(err);
      });
  }, []);

  const PostData = async () => {
    const formData = new FormData();
    formData.append('workshopName', workshopName);
    formData.append('workshopDescription', workshopDescription);
    formData.append('workshopPhoto', workshopPhoto);
    formData.append('domainCoor1', domainCoor1);
    // formData.append("domainCoor2", domainCoor2);
    formData.append('workshopVenue', workshopVenue);
    formData.append('workshopDate', workshopDate);
    formData.append('workshopTime', workshopTime);
    // alert(JSON.stringify(formData));
    setIsLoading(true);
    await axios.post(`${baseUrl}/workshop/create`, formData).then((result) => {
      setIsLoading(false);
      const res = result;
      notify(res.data.message);
    });
  };

  return (
    <div className="workshopAdd">
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
        className="container"
        style={{
          width: "auto",
          textAlign: "center",
          fontSize: "2.5em",
          margin: "0.5em",
        }}
      >
        Add Workshops
      </div>

      <div className="workshopItems">
        <label>
          Name :{' '}
          <input
            type="text"
            onChange={(e) => setWorkshopName(e.target.value)}
            name="name"
          />
        </label>
        <div className="photoUpload">
          Workshop Picture:
          <input
            style={{ border: 'none' }}
            type="file"
            onChange={(e) => setWorkshopPhoto(e.target.files[0])}
            accept="/Image/*"
          />
        </div>
      </div>
      <div
        style={{ width: 'auto', justifyContent: 'right', textAlign: 'center' }}
      >
        Workshop Description (max 50 words)
        <br />
        <textarea
          name="description"
          onChange={(e) => setWorkshopDescription(e.target.value)}
          cols="30"
          rows="3"
        />
      </div>
      <div className="container">
        <div>
          <div className="container-head">Domain Co-ordinator - 1</div>
          <div className="domainBox">
            <select
              // className={styles.signup__select}
              sx={{ height: '10px' }}
              onChange={(e) => setDomainCoor1(e.target.value)}
              // id='branch'
              name="role"
              // value={branch}
              required
            >
              {coordinators?.map((item) => (
                <option value={item._id}>{item.coordinatorEmail}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="container-head" style={{ marginBottom: '1.8em' }} />
        <div className="workshopBox">
          <div className="workshopItems">
            <label>
              Date :{' '}
              <input
                type="date"
                onChange={(e) => setWorkshopDate(e.target.value)}
                name="date"
              />
            </label>
          </div>
          <div className="workshopItems">
            <label>
              Time :{' '}
              <input
                type="time"
                onChange={(e) => setWorkshopTime(e.target.value)}
                name="time"
              />
            </label>
          </div>
          <div className="workshopItems">
            <label>
              Venue :{' '}
              <input
                name="venue"
                onChange={(e) => setWorkshopVenue(e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>
      <button type="button" onClick={PostData} className="submit-btn">
        Submit
      </button>
    </div>
  );
};

export default Workshopadd;
