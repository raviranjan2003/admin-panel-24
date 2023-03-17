import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
import { baseUrl } from "../API/api";
import { downloadCSV } from "../contexts/Csv";
import { downloadPdf } from "../contexts/exportAsPDF";
import axios from "axios";
import Loader from '../components/Loader/Loader';

const Eventusers = () => {
  const [event, setEvent] = useState(null);
    const [user, setUser] = useState(null);
    const [user1, setUser1] = useState(null);
    const [members, setMembers] = useState(null);
    const [isLoading ,setIsLoading ] = useState(false);
  const navigate = useNavigate();
  const routerParams = useParams();

  useEffect( () => {
    getEventData();
  }, []);
  const getEventData = async () => {

    setIsLoading(true);
    await axios
      .get(`${baseUrl}/event/event/${routerParams.id}`)
      .then((result) => {
        setIsLoading(false);
        const res = result.data.event;
        const res1 = result.data.event.individual;
        // alert(JSON.stringify(result.data))
        const res2 = result.data.event.teams;
        setEvent(res);
        setUser(res1);
        setUser1(res2);
        setMembers(res2[0].members)
      });
  }

  createTheme(
    "solarized",
    {
      text: {
        primary: "#00000",
        secondary: "#00000",
      },
      background: {
        default: 'white',
      },
    },
    "dark"
  );

  const columns = [
    {
      name: "User Name",
      selector: (row) => row.userName,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Branch",
      selector: (row) => row.branch,
    },
  ];
  const column = [
    {
      name: "Team Name",
      selector: (row) => row.teamName,
    },
    {
      name: "Leader Name",
      selector: (row) => row.leaderName,
    }
  ];

  const data = [];
  user?.map((user) => {
    const work = {
      userName: user.name,
      email: user.email,
      phone: user.phone,
      branch: user.branch,
    };
    return data.push(work);
  });
  const data2 = [];
  user1?.map((user) => {
    const work = {
      teamName: user.teamName,
      leaderName: user.leaderName,
    };
    return data2.push(work);
  });

  const headers = [["Id", "User Name", "Email", "Phone", "Branch"]];
  const Dummydata = data.map((elt) => [
    elt.id,
    elt.userName,
    elt.email,
    elt.whatsapp,
    elt.branch,
  ]);

  const actionsMemo = React.useMemo(
    () => (
      <button
        style={{ marginRight: "50px" }}
        onClick={() => downloadCSV(data, "Workshops")}
      >
        CSV
      </button>
    ),
    []
  );
  const actionsMemo2 = React.useMemo(
    () => (
      <button onClick={() => downloadPdf(headers, Dummydata, "Workshops")}>
        PDF
      </button>
    ),
    []
  );
  const membersData = ({data}) => <pre>{JSON.stringify(data)}</pre>
  return (
    <>
    {isLoading && <Loader />}
      <div
        className="container"
        style={{
          width: "auto",
          textAlign: "center",
          fontSize: "2.5em",
          margin: "0.5em",
        }}
      >
        <p>Domain : {event && `${event.domainName}`.toUpperCase()}</p>
        <p>Event: {event && event.eventName}</p>
      </div>
      <h1 style={{
          width: "auto",
          textAlign: "center",
          fontSize: "2em",
          margin: "0.5em",
        }}>Individual User Registered</h1>
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
          data={data}
          pagination
          expandableRows
          expandOnRowClicked
          expandableRowsComponent={membersData}
          theme="solarized"
          actions={[actionsMemo, actionsMemo2]}
        />
      </div>
      <h1 style={{
          width: "auto",
          textAlign: "center",
          fontSize: "2em",
          margin: "0.5em",
        }}>Team User Registered</h1>
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
          columns={column}
          data={data2}
          pagination
          expandableRows
          expandOnRowClicked
          expandableRowsComponent={membersData}
          theme="solarized"
          actions={[actionsMemo, actionsMemo2]}
        />
      </div>
    </>
  );
};

export default Eventusers;
