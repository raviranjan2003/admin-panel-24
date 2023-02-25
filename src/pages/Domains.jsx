import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Domainadd from "../pages/Domainadd";
import DataTable, { createTheme } from "react-data-table-component";
import { useStateContext } from "../contexts/ContextProvider";

const Domains = () => {
  const { coordinatorLoggedIn, role } = useStateContext();
  createTheme(
    "solarized",
    {
      text: {
        primary: "#eaf200",
        secondary: "#eaf200",
      },
      background: {
        default: "#8578e3",
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
      name: "Domain Name",
      selector: (row) => row.domainName,
    },
    {
      name: "Domain Co-ordinator",
      selector: (row) => row.domainCoordinator,
    },
    {
      name: "Faculty Advisor",
      selector: (row) => row.facultyAdvisor,
    },
  ];

  const data = [
    {
      id: 1,
      domainName: "Plexus",
      domainCoordinator: "Ashish",
      facultyAdvisor: "Ashish",
    },
    {
      id: 2,
      domainName: "Chemfor",
      domainCoordinator: "Ashish",
      facultyAdvisor: "Ashish",
    },
    {
      id: 3,
      domainName: "Chemfor",
      domainCoordinator: "Ashish",
      facultyAdvisor: "Ashish",
    },
    {
      id: 4,
      domainName: "Chemfor",
      domainCoordinator: "Ashish",
      facultyAdvisor: "Ashish",
    },
    {
      id: 5,
      domainName: "Chemfor",
      domainCoordinator: "Ashish",
      facultyAdvisor: "Ashish",
    },
    {
      id: 6,
      domainName: "Chemfor",
      domainCoordinator: "Ashish",
      facultyAdvisor: "Ashish",
    },
    {
      id: 7,
      domainName: "Chemfor",
      domainCoordinator: "Ashish",
      facultyAdvisor: "Ashish",
    },
    {
      id: 8,
      domainName: "Chemfor",
      domainCoordinator: "Ashish",
      facultyAdvisor: "Ashish",
    },
    {
      id: 9,
      domainName: "Chemfor",
      domainCoordinator: "Ashish",
      facultyAdvisor: "Ashish",
    },
    {
      id: 10,
      domainName: "Chemfor",
      domainCoordinator: "Ashish",
      facultyAdvisor: "Ashish",
    },
    {
      id: 11,
      domainName: "Chemfor",
      domainCoordinator: "Ashish",
      facultyAdvisor: "Ashish",
    },
  ];

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
        style={{
          width: "auto",
          textAlign: "center",
          fontSize: "2.5em",
          margin: "0.5em",
        }}
      >
        DOMAINS
      </div>
      {coordinatorLoggedIn && role == 892348 && (
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
        <Link to="/domainadd">
          <button type="button">Add New Domain</button>
        </Link>
      </div>
      )}
      <div
        style={{
          border: "2px solid green",
          padding: "1.2em",
          borderRadius: "15px",
          background: "#8578e3",
          fontSize: "2em",
        }}
      >
        <DataTable columns={columns} data={data} pagination theme="solarized" />
      </div>
    </>
  );
};

export default Domains;
