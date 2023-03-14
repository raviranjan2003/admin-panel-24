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
    domainName: "Aarambh",
    domainCoordinator1: "----------",
    domainCoordinator2: "----------",
    facultyAdvisor: "----------",
  },
  {
    id: 2,
    domainName: "Plexus",
    domainCoordinator1: "Abhishek",
    domainCoordinator2: "Gaurav Kumar",
    facultyAdvisor: "----------",
  },
  {
    id: 3,
    domainName: "Chemfor",
    domainCoordinator1: "Tanu Shakya",
    domainCoordinator2: "Shubham",
    facultyAdvisor: "----------",
  },
  {
    id: 4,
    domainName: "Electrica",
    domainCoordinator1: "Sudhanshu Kumar",
    domainCoordinator2: "Amit Kumar Singh",
    facultyAdvisor: "----------",
  },
  {
    id: 5,
    domainName: "Genesis",
    domainCoordinator1: "Saksham Sharma",
    domainCoordinator2: "----------",
    facultyAdvisor: "----------",
  },
  {
    id: 6,
    domainName: "Karyarachana",
    domainCoordinator1: "Adarsh Kumar",
    domainCoordinator2: "Aditee Pankaj",
    facultyAdvisor: "----------",
  },
  {
    id: 7,
    domainName: "Kermis",
    domainCoordinator1: "Aditya Mall",
    domainCoordinator2: "----------",
    facultyAdvisor: "----------",
  },
  {
    id: 8,
    domainName: "Mechanica",
    domainCoordinator1: "Shahab Mahfooz",
    domainCoordinator2: "----------",
    facultyAdvisor: "----------",
  },
  {
    id: 9,
    domainName: "Robozar",
    domainCoordinator1: "Tushar Chandra",
    domainCoordinator2: "----------",
    facultyAdvisor: "----------",
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
      name: "Domain Coordinator 1",
      selector: (row) => row.domainCoordinator1,
    },
    {
      name: "Domain Coordinator 2",
      selector: (row) => row.domainCoordinator2,
    },
    {
      name: "Faculty Advisor",
      selector: (row) => row.facultyAdvisor,
    },
  ];
  const headers = [["Id", "Domain Name","Student Coordintor 1", "Student Coordinator 2","Faculity Cooridator"]];
  const data = Dummydata.map(elt=> [elt.id, elt.domainName,elt.domainCoordinator1,elt.domainCoordinator2,elt.facultyAdvisor]);
 
  
  const actionsMemo = React.useMemo(() => <button style={{marginRight:"50px"}} onClick={() => downloadCSV(data,"Domains")}>CSV</button>, []);
  const actionsMemo2 = React.useMemo(() => <button onClick={() => downloadPdf(headers,data,"Domains")}>PDF</button>, []);
  return (
    <>
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
      {/* {coordinatorLoggedIn && role == 892348 && (
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
      )} */}
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
