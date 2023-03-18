import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
import { baseUrl } from "../API/api";
import { useStateContext } from "../contexts/ContextProvider";
import { downloadPdf } from "../contexts/exportAsPDF";
import { downloadCSV } from "../contexts/Csv";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../components/Loader/Loader";
import { useEffect } from "react";

import "./Event.css";
const Events = () => {
  const navigate = useNavigate();
  const { coordinatorLoggedIn, role, domain } = useStateContext();
  const [domainName, setDomainName] = useState("aarambh");
  const [isLoading, setIsLoading] = useState(false);
  const [eventDetails, setEventDetails] = useState([]);
  const getEvent = async (domainN) => {
    setIsLoading(true);
    await axios
      .post(`${baseUrl}/event/geteventbydomainname`, { domainName: domainN })
      .then((result) => {
        setIsLoading(false);
        const res = result;
        setEventDetails(res.data.event);
      });
  };
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

  createTheme(
    "solarized",
    {
      text: {
        primary: "rgb(22,10,10)",
        secondary: "rgb(22,10,10)",
      },
      background: {
        default: "#fff",
      },
    },
    "dark"
  );

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
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
    {
      name: "View",
      cell: (row) => (
        <button
          className="btn"
          onClick={() => {
            navigate(`/event/${row.id}`);
          }}
        >
          View
        </button>
      ),
    },
  ];

  const eventData = [];

  eventDetails?.map((item) => {
    const event = {
      id: item._id,
      eventName: item.eventName,
      venue: item.venue,
      prize: item.ePrizeWorth,
      date: item.startDate,
      std1: item.studentCoordinator[0].coordinatorName,
      std2: item.studentCoordinator[1]?.coordinatorName,
    };
    eventData.push(event);
  });

  const headers = [
    [
      "Id",
      "Event Name",
      "Student Coordinator 1",
      "Student Coordinator 2",
      "Date",
      "Venue",
    ],
  ];
  const actionsMemo = (
    <>
      <button
        style={{ marginRight: "50px" }}
        onClick={() =>
          downloadCSV(
            eventData?.map((elt) => {
              return {
                id: elt.id,
                eventName: elt.eventName,
                StudentCoordinator1: elt.std1,
                StudentCoordinator2: elt.std2,
                date: elt.date,
                venue: elt.venue.replace(",", "⹁"),
              };
            }),
            "Events",
          )}
      >
        CSV
      </button>
    </>
  );
  const actionsMemo2 = (
    <>
      <button
        onClick={() =>
          setTimeout(() => {
            downloadPdf(
              headers,
              eventData?.map((elt) => [
                elt.id,
                elt.eventName,
                elt.std1,
                elt.std2,
                elt.venue,
                elt.date,
              ]),
              `${domainName} Events`,
            );
          }, 5000)}
      >
        PDF
      </button>
    </>
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
          width: "auto",
          textAlign: "center",
          fontSize: "2.5em",
          margin: "0.5em",
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
        <label for="domains">Choose Domains :</label>
        <select
          id="domains"
          name="domains"
          onChange={(e) => {
            setDomainName(e.target.value);
            getEvent(e.target.value);
          }}
        >
          <option value="0">Select</option>
          <option value="aarambh">Aarambh</option>
          <option value="plexus">Plexus</option>
          <option value="chemfor">Chemfor</option>
          <option value="electrica">Electrica</option>
          <option value="genesis">Genesis</option>
          <option value="karyarachna">Karyarachna</option>
          <option value="kermis">Kermis</option>
          <option value="mechanica">Mechanica</option>
          <option value="robozar">Robozar</option>
        </select>
      </div>

      <div
        style={{
          padding: "0.75em",
          borderRadius: "15px",
          fontSize: "40px",
        }}
      >
        <DataTable
          columns={columns}
          data={eventData}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="100%"
          theme="solarized"
          actions={[actionsMemo, actionsMemo2]}
        />
      </div>
    </>
  );
};

export default Events;
