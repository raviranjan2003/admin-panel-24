import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Workshopadd from '../pages/Workshopadd'
import DataTable , { createTheme } from 'react-data-table-component';
import { baseUrl } from '../API/api';
import { downloadCSV } from '../contexts/Csv';
import { downloadPdf } from '../contexts/exportAsPDF';
import axios from 'axios';

const Workshops = () => {
  const [workshops, setWorkshops] = useState(null);
  const navigate = useNavigate();

  useEffect(async () => {
    // setIsLoading(true);
    await axios.get(`${baseUrl}/workshop/workshops`).then((result) => {
      // setIsLoading(false);
      const res = result?.data.workshops;
      setWorkshops(res);
    });
  }, []);

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
        name: 'Workshop Name',
        selector: row => row.workshopName,
    },
    {
      name: 'Date',
      selector: row => row.date,
  },
    {
      name: 'Time',
      selector: row => row.time,
  },
  {
    name: 'Domain',
    selector: row => row.domain,
},
  {
    name: 'Venue',
    selector: row => row.venue,
},
{
  name: "View",
  cell: (row) => (
    <button
      className="btn"
      onClick={
        () => {
            navigate(`/workshop/${row.id}`);
        }
      }
    >
      View
    </button>
  ),
},
];

const data = [];
workshops?.map((workshop) => {
  const work = {
    id: workshop._id,
    workshopName: workshop.workshopName,
    venue: workshop.workshopVenue,
    time: workshop.workshopTime,
    date: workshop.workshopDate,
    domain: workshop.domainName
  }
  data.push(work);
});

const headers = [["Id", "Workshop Name","Domain","Date", "Time","Venue"]];
const Dummydata = data.map(elt=> [elt.id, elt.workshopName,elt.eventCoordinator,elt.dateAndTime,elt.venue]);


const actionsMemo = React.useMemo(() => <button style={{marginRight:"50px"}} onClick={() => downloadCSV(data,"Workshops")}>CSV</button>, []);
const actionsMemo2 = React.useMemo(() => <button onClick={() => downloadPdf(headers,Dummydata,"Workshops")}>PDF</button>, []);
  return (
    <>
    <div className="heading" style={{
        "width": "auto",
        "textAlign": "center",
        "fontSize": "2.5em",
        "margin": "0.2em",
        "marginBottom": "0em"
      }}>Namaste ! Super Admin</div>
      <div className="description" style={{
        "width": "auto",
        "textAlign": "center",
        "fontSize": "0.75em",
        "marginBottom":"3.5em"
      }}>Your unique tF ID is t960</div>
      <div className='container' style={{
        "width": "auto",
        "textAlign": "center",
        "fontSize": "2.5em",
        "margin":"0.5em"
      }}>WORKSHOPS</div>
      <div style={{"fontSize": "18px","border":"2px solid blue", "display": "table",
    "margin": "5px auto", "padding":"5px","borderRadius":"8px"}}><Link to="/workshopadd">
    <button type="button">
         Add New Workshop
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

export default Workshops