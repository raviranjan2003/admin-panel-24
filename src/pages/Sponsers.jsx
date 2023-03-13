import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Workshopadd from '../pages/Workshopadd'
import DataTable , { createTheme } from 'react-data-table-component';
import { downloadCSV } from '../contexts/Csv';
import { downloadPdf } from '../contexts/exportAsPDF';

const Sponsers = () => {
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
      name: 'iD',
      selector: row => row.id,
  },
    {
        name: 'Sponser Name',
        selector: row => row.sponserName,
    },
    {
        name: 'Website Link',
        selector: row => row.sponserName,
    },
  {
    name: 'Contact Person',
    selector: row => row.contactPerson,
},
];

const data = [
  {
      id: 1,
      sponserName: 'Reliance',
      websiteLink: 'www.reliance.com',
      contactPerson : 'Ashish'
      
  },
  {
    id: 2,
      sponserName: 'ITC',
      websiteLink: 'www.itc.com',
      contactPerson : 'Ashish'
      
    
},
]
const headers = [["Id", "Sponser Name","Website Link","Contact Person"]];
const Dummydata = data.map(elt=> [elt.id, elt.sponserName,elt.sponserName,elt.contactPerson]);
const actionsMemo = React.useMemo(() => <button style={{marginRight:"50px"}} onClick={() => downloadCSV(Dummydata,"Sponsors")}>CSV</button>, []);
  const actionsMemo2 = React.useMemo(() => <button onClick={() => downloadPdf(headers,Dummydata,"Sponsors")}>PDF</button>, []);
  return (
    <>
      <div style={{"fontSize": "18px","border":"2px solid blue", "display": "table",
    "margin": "5px auto", "padding":"5px","borderRadius":"8px"}}><Link to="/sponseradd">
    <button type="button">
         Add New sponser
    </button>
</Link></div>
      <div style={{"border":"2px solid green", "padding":"1.2em", "borderRadius":'15px', "background":"#006600"}}>
      <DataTable
            columns={columns}
            data={data}
            pagination
            theme="solarized"
            actions={
              [actionsMemo,
              actionsMemo2]
            }
        />
      </div>
    
    </>
    
  )
}

export default Sponsers