import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const [domainName, setDomainName] = useState("aarambh");
  const paramsDomain = useParams();
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

  // const getEvent = async (domain) => {
  useEffect(async () => {
    setIsLoading(true);
    await axios
      .post(`${baseUrl}/event/geteventbydomain`, {
        domainName: paramsDomain.domain,
      })
      .then((result) => {
        setIsLoading(false);
        const res = result;
        setEventDetails(res.data.event);
      });
  }, []);
  // };

  const deleteEvent = async (id) => {
    setIsLoading(true);
    await axios.post(`${baseUrl}/event/delete`, { id }).then((result) => {
      setIsLoading(false);
      if (result.status === 200) {
        notify(result.data.message);
      }
    });
  };

  createTheme(
    "solarized",
    {
      text: {
        primary: "#00000",
        secondary: "#00000",
      },
      background: {
        default: "white",
      },
    },
    "dark",
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
    {
      name: "Edit",
      selector: (row) => {
        return (
          <Link to={`/eventedit/${row.id}`}>
            <button className="btn">Edit</button>
          </Link>
        );
      },
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
    {
      name: "Delete Event",
      selector: (row) => (
        <button
          className="btn_delete"
          onClick={() => deleteEvent(row.id)}
        >
          Delete
        </button>
      ),
    },
  ];

  const eventData = eventDetails?.map((item) => {
    return {
      id: item._id,
      eventName: item.eventName,
      venue: item.venue,
      prize: item.ePrizeWorth,
      date: item.startDate,
      std1: item.studentCoordinator[0].coordinatorName,
      std2: item.studentCoordinator[1]?.coordinatorName,
    };
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
        className="container"
        style={{
          width: "auto",
          textAlign: "center",
          fontSize: "2.5em",
          margin: "0.1em",
        }}
      >
        <div>ALL EVENTS LIST</div>
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
      <br />

      <div
        style={{
          // border: "2px solid green",
          padding: "0.75em",
          borderRadius: "15px",
          //background: "rgb(22,10,10)",
          fontSize: "40px",
        }}
      >
        <DataTable
          columns={columns}
          data={eventData}
          //  pagination
          fixedHeader
          fixedHeaderScrollHeight="100%"
          pointerOnHover
          highlightOnHover
          theme="solarized"
          actions={[actionsMemo, actionsMemo2]}
        />
      </div>
    </>
  );
};

export default Events;
