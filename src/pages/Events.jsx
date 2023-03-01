import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import DataTable, { createTheme } from 'react-data-table-component';
import Eventadd from '../pages/Eventadd' 
const Events = () => {

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
      name: 'Event Name',
      selector: row => row.eventName,
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
      eventName: 'Margadarshak',
      eventCoordinator: 'Ashish',
      dateAndTime: 'March 17, 2023 11:00 AM',
      venue: 'MPH, 1st Floor'

    },
    {
      id: 2,
      eventName: 'Margadarshak',
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
        "marginBottom": "3.5em"
      }}>Your unique tF ID is t960</div>
      <div className="container" style={{
        "width": "auto",
        "textAlign": "center",
        "fontSize": "2.5em",
        "margin": "0.1em"
      }}><div>EVENTS</div>
      </div>
      <div style={{"fontSize": "18px","border":"2px solid blue", "display": "table",
    "margin": "0 auto", "padding":"5px","borderRadius":"8px"}}><Link to="/eventadd">
    <button type="button">
         Add New Event
    </button>
</Link></div>
      <div style={{ "margin": "7px" }}>
        <label for="events">Choose Events : </label>
        <select id="events" name="events">
          <option value="margadarshak">margadarshak 1</option>
          <option value="margadarshak">margadarshak 2</option>
          <option value="margadarshak">margadarshak 3</option>
          <option value="margadarshak">margadarshak 4</option>
        </select>
      </div>

      <div style={{ "border": "2px solid green", "padding": "1.2em", "borderRadius": '15px', "background": "#006600" }}>
        <DataTable
          columns={columns}
          data={data}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="450px"
          theme="solarized"
        />
      </div>
    </>
  )
}

export default Events