import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Domainadd from "../pages/Domainadd";
import DataTable, { createTheme } from "react-data-table-component";
import { useStateContext } from "../contexts/ContextProvider";
import { downloadCSV } from "../contexts/Csv";
 import './Domians.css'
import { downloadPdf } from "../contexts/exportAsPDF";
// import Button from '../shared/Button';
const Dummydata = [
  {
    id: 1,
    domainName: "Aarambh",
    domainCoordinator1: "Amisha",
    domainCoordinator2: "----------",
  },
  {
    id: 2,
    domainName: "Plexus",
    domainCoordinator1: "Kritagya Upadhayay",
    domainCoordinator2: "Sagar Guney",
  },
  {
    id: 3,
    domainName: "Chemica",
    domainCoordinator1: "Khushi Kumari",
    domainCoordinator2: "Rakesh Kumar",
  },
  {
    id: 4,
    domainName: "Electrica",
    domainCoordinator1: "Aman Kumar",
    domainCoordinator2: "----------",
  },
  {
    id: 5,
    domainName: "Genesis",
    domainCoordinator1: "Nischay Sharma",
    domainCoordinator2: "----------",
  },
  {
    id: 6,
    domainName: "Karyarachana",
    domainCoordinator1: "Ankit Raj",
    domainCoordinator2: "----------",
  },
  {
    id: 7,
    domainName: "Kermis",
    domainCoordinator1: "Askand Prabhu",
    domainCoordinator2: "----------",
  },
  {
    id: 8,
    domainName: "Mechanica",
    domainCoordinator1: "Pradeep Kumar",
    domainCoordinator2: "----------",
  },
  {
    id: 9,
    domainName: "Robozar",
    domainCoordinator1: "Vaibhav Roy",
    domainCoordinator2: "----------",
  },
  {
    id: 10,
    domainName: "Electronica",
    domainCoordinator1: "Hritik Kumar",
    domainCoordinator2: "----------",
  },
  {
    id: 11,
    domainName: "Atomhiemer",
    domainCoordinator1: "Vishal Anand",
    domainCoordinator2: "----------",
  },
  {
    id: 12,
    domainName: "Food-O-Crats",
    domainCoordinator1: "Anmol Kumar",
    domainCoordinator2: "Raj Nandan",
  },
  {
    id: 13,
    domainName: "Venture Vault",
    domainCoordinator1: "----------",
    domainCoordinator2: "----------",
  },
];

const Domains = () => {
  const { coordinatorLoggedIn, role } = useStateContext();
  
  createTheme('solarized', {
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
    background: {
      default: ' black',
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
    // {
    //   name: "Faculty Advisor",
    //   selector: (row) => row.facultyAdvisor,
    // },
  ];
  const headers = [["Id", "Domain Name","Student Coordintor 1", "Student Coordinator 2"]];
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
           marginBottom:"0px"
        }}
      >
         ALL DOMAINS
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
          // border: "2px solid green",
          padding: "0.75em",
           borderRadius: "15px",
           paddingBottom:"0px",
          background: "rgb(22,10,10)",
          fontSize: "40px",
        }}
      >
        <DataTable 
        columns={columns} 
        data={Dummydata} 
        theme="solarized" 
        // actions={
        //   [actionsMemo,
        //   actionsMemo2]
        // }
        />
        
      </div>
    </>
  );
};

export default Domains;
