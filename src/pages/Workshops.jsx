import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Workshopadd from '../pages/Workshopadd'
import DataTable , { createTheme } from 'react-data-table-component';

const Workshops = () => {

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
        name: 'Event Co-ordinator',
        selector: row => row.eventCoordinator,
    },
    {
      name: 'Date and Time',
      selector: row => row.dateAndTime,
  },
  {
    name: 'Venue',
    selector: row => row.venue,
},
];

const data = [
  {
      id: 1,
      workshopName: 'Margadarshak',
      eventCoordinator: 'Ashish',
      dateAndTime: 'March 17, 2023 11:00 AM',
      venue: 'MPH, 1st Floor'
      
  },
  {
    id: 2,
    workshopName: 'Margadarshak',
    eventCoordinator: 'Ashish',
    dateAndTime: 'March 17, 2023 11:00 AM',
    venue: 'MPH, 1st Floor'
    
},
]

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
        />
      </div>
    
    </>
    
  )
}

export default Workshops