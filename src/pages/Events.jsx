import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
import { baseUrl } from "../API/api";
import { useStateContext } from "../contexts/ContextProvider";
import { downloadPdf } from "../contexts/exportAsPDF";
import { downloadCSV } from "../contexts/Csv";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../components/Loader/Loader";
import { useEffect } from "react";

const Events = () => {
  const { coordinatorLoggedIn, role, domain } = useStateContext();
  const [domainName, setDomainName] = useState('aarambh');
  const [isLoading, setIsLoading] = useState(false);
  const [eventDetails, setEventDetails] = useState([]);
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

  const getEvent = async (domain) => {
      console.log(domain)
      await axios
      .post(`${baseUrl}/event/geteventbydomainname`, { domainName: domain })
      .then((result) => {
        const res = result;
        setEventDetails(res.data.event);
      });
  };


  createTheme(
    "solarized",
    {
      text: {
        primary: "#ffffff",
        secondary: "#ffffff",
      },
      background: {
        default: 'rgb(22,10,10)',
      },
    },
    "dark"
  );

  const columns = [
    {
      name: "Event Name",
      selector: (row) => row.eventName,
    },
    {
      name: "Student Coordinator 1",
      selector: (row) => row.std1,
    },
    {
      name: "Student Coordinator 2",
      selector: (row) => row.std2,
    },
    {
      name: "Venue",
      selector: (row) => row.venue,
    },
    {
      name: "Date",
      selector: (row) => row.date.slice(0, 10),
    },
  ];

  const eventData = [];

  eventDetails?.map((item) => {
    const event = {
      eventName: item.eventName,
      venue: item.venue,
      prize: item.ePrizeWorth,
      date: item.startDate,
      std1: item.studentCoordinator[0].coordinatorName,
      std2: item.studentCoordinator[1].coordinatorName,
    };
    eventData.push(event);
  });

  const headers = [
    [
      "Event Name",
      "Student Coordinator 1",
      "Student Coordinator 2",
      "Date",
      "Venue",
    ],
  ];
  const data = eventData.map((elt) => [
    elt.eventName,
    elt.std1,
    elt.std2,
    elt.venue,
    elt.date,
  ]);

  const actionsMemo = React.useMemo(
    () => (
      <button
        style={{ marginRight: "50px" }}
        onClick={() => downloadCSV(eventData, "Events")}
      >
        CSV
      </button>
    ),
    []
  );
  const actionsMemo2 = React.useMemo(
    () => (
      <button onClick={() => downloadPdf(headers, data, "Events")}>PDF</button>
    ),
    []
  );
  return (
    <>
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
      {isLoading && <Loader />}
      <div
        style={{
          "width": "auto",
        "textAlign": "center",
        "fontSize": "2.5em",
        "margin": "0.5em"
        }}
      >
        <div>EVENTS</div>
      </div>
      {coordinatorLoggedIn && role == 948759 && (
        <div
          style={{
            fontSize: "18px",
            border: "2px solid blue",
            display: "table",
            margin: "7px auto",
            padding: "5px",
            borderRadius: "8px",
          }}
        >
          <Link to="/eventadd">
            <button type="button">Add New Event</button>
          </Link>
        </div>
      )}
      <div style={{ margin: "7px" }}>
        <label for="domains">Choose Domains : </label>
        <select
          id="domains"
          name="domains"
          onChange={(e) => {
            setDomainName(e.target.value);
            getEvent(e.target.value);
          }}
        >
          <option value="0">Select</option>
          {(domain == "Aarambh" || domain == "Admin")  && <option value="aarambh">Aarambh</option>}
          {(domain == "Plexus" || domain == 'Admin')&& <option value="plexus">Plexus</option>}
          {(domain == "Chemfor" || domain == 'Admin') && <option value="chemfor">Chemfor</option>}
          {(domain == "Electrica" || domain == 'Admin') && (
            <option value="electrica">Electrica</option>
          )}
          {(domain == "Genesis" || domain == 'Admin') && <option value="genesis">Genesis</option>}
          {(domain == "Karyarachana" || domain == 'Admin') && (
            <option value="karyarachana">Karyarachana</option>
          )}
          {(domain == "Kermis" || domain == 'Admin') && <option value="kermis">Kermis</option>}
          {(domain == "Mechanica" || domain == 'Admin') && (
            <option value="mechanica">Mechanica</option>
          )}
          {(domain == "Robozar" || domain == 'Admin') && <option value="robozar">Robozar</option>}
        </select>
      </div>

      <div
        style={{
          border: "2px solid green",
          padding: "0.75em",
          borderRadius: "15px",
          background: "#006600",
          background: "rgb(22,10,10)",
          fontSize: "40px",
        }}
      >
        <DataTable
          columns={columns}
          data={eventData}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="450px"
          theme="solarized"
          actions={[actionsMemo, actionsMemo2]}
        />
      </div>
    </>
  );
};

export default Events;
