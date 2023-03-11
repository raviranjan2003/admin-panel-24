import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Domainadd from "../pages/Domainadd";
import DataTable, { createTheme } from "react-data-table-component";
import { useStateContext } from "../contexts/ContextProvider";
import { downloadCSV } from "../contexts/Csv";
import { downloadPdf } from "../contexts/exportAsPDF";
// import Button from '../shared/Button';
const Dummydata = [
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

const Domains = () => {
  const { coordinatorLoggedIn, role } = useStateContext();
  
  createTheme('solarized', {
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
    background: {
      default: '#006600',
    },
  }, 'dark');

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
      name: "Domain Coordinator",
      selector: (row) => row.domainCoordinator,
    },
    {
      name: "Faculty Advisor",
      selector: (row) => row.facultyAdvisor,
    },
  ];
  const headers = [["Id", "Domain Name","Student Coordintor","Faculity Cooridator"]];
  const data = Dummydata.map(elt=> [elt.id, elt.domainName,elt.domainCoordinator,elt.facultyAdvisor]);
 
  
  const actionsMemo = React.useMemo(() => <button style={{marginRight:"50px"}} onClick={() => downloadCSV(data,"Domains")}>CSV</button>, []);
  const actionsMemo2 = React.useMemo(() => <button onClick={() => downloadPdf(headers,data,"Domains")}>PDF</button>, []);
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
          background: "#006600",
          fontSize: "2em",
        }}
      >
        <DataTable columns={columns} data={Dummydata} pagination theme="solarized" 
        actions={
          [actionsMemo,
          actionsMemo2]
        }
        />
        
      </div>
      {/* [
          {
            icon: () => <button>Export</button>,
            tooltip: "export to pdf",
            onClick: () => downloadPdf(),
            isFreeAction: true
          }
        ] */}

      {/* <div style={{"border":"2px solid green", "padding":"1.2em", "borderRadius":'15px', "background":"#8578e3", "fontSize":"2em"}}>
      <DataTableExtensions
      columns={columns}
      data={data}
    >
    <DataTable
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
            theme="solarized"

        />
        </DataTableExtensions>
      </div> */}
    </>
  );
};

export default Domains;
