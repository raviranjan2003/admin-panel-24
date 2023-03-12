import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
import Eventadd from "../pages/Eventadd";
import { baseUrl } from "../API/api";
import { useStateContext } from "../contexts/ContextProvider";
import { downloadPdf } from "../contexts/exportAsPDF";
import { downloadCSV } from "../contexts/Csv";
import axios from "axios";

const Events = () => {
  const { coordinatorLoggedIn, role } = useStateContext();
  const [domainName, setDomainName] = useState("aarambh");
  const [eventDetails, setEventDetails] = useState([])

  const getEvent = async() => {
    await axios
      .post(`${baseUrl}/event/getEventByDomainName`, {domainName})
      .then((result) => {
        const res = result;
        setEventDetails(res.data.event);
      })
  }


  const getCoor = async (userId) => {
    await axios
      .post(`${baseUrl}/user/getuserbyobjid`, {_id: userId})
      .then((result) => {
        const res = result;
        return res.data.user.name;
      })
  }

  createTheme(
    "solarized",
    {
      text: {
        primary: "#ffffff",
        secondary: "#ffffff",
      },
      background: {
        default: "#006600",
      },
    },
    "dark"
  );

  const columns = [
    {
      name: "iD",
      selector: (row) => row.id,
    },
    {
      name: "Event Name",
      selector: (row) => row.eventName,
    },
    {
      name: "Student Coordinator 1",
      selector: (row) => (row.std1),
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
      id: item._id,
      eventName: item.eventName,
      venue: item.venue,
      prize: item.ePrizeWorth,
      date: item.startDate,
      std1: item.studentCoordinator[0],
      std2: item.studentCoordinator[1]
    }
    eventData.push(event);
  });

  const headers = [
    ["Id", "Event Name", "Student Coordinator 1","Student Coordinator 2", "Date", "Venue"],
  ];
  const data = eventData.map((elt) => [
    elt.id,
    elt.eventName,
    elt.std1,
    elt.std2,
    elt.venue,
    elt.date
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
      <div
        className="heading"
        style={{
          width: "auto",
          textAlign: "center",
          fontSize: "2.5em",
          margin: "0.2em",
          marginBottom: "0em",
        }}
      >
        Namaste ! Super Admin
      </div>
      <div
        className="description"
        style={{
          width: "auto",
          textAlign: "center",
          fontSize: "0.75em",
          marginBottom: "3.5em",
        }}
      >
        Your unique tF ID is t960
      </div>
      <div
        className="container"
        style={{
          width: "auto",
          textAlign: "center",
          fontSize: "2.5em",
          margin: "0.1em",
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
            margin: "0 auto",
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
            getEvent();
          }}
        >
          <option value="0">Select</option>
          <option value="aarambh">Aarambh</option>
          <option value="plexus">Plexus</option>
          <option value="chemfor">Chemfor</option>
          <option value="electrica">Electrica</option>
          <option value="genesis">Genesis</option>
          <option value="karyarachana">Karyarachana</option>
          <option value="kermis">Kermis</option>
          <option value="mechanica">Mechanica</option>
          <option value="robozar">Robozar</option>
        </select>
      </div>

      <div
        style={{
          border: "2px solid green",
          padding: "1.2em",
          borderRadius: "15px",
          background: "#006600",
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
