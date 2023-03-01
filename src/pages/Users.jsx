import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Domainadd from './Domainadd'
import DataTable , { createTheme } from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

const Users = () => {

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
      name: 'Name',
      selector: row => row.name,
    },
    {
      name: 'Domain',
      selector: row => row.domain,
    },
    {
      name: 'Event',
      selector: row => row.event,
    },
  ];

  const data = [
    {
      id: 1,
      name: 'Ashish',
      domain: 'Plexus',
      event: 'Code Sprint'
    },
    {
      id: 2,
      name: 'Ashish',
      domain: 'Plexus',
      event: 'Code Sprint'
    },
  ];


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
      }}>Users</div>

<div style={{ "border": "2px solid green", "padding": "1.2em", "borderRadius": '15px', "background": "#006600" }}>
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

export default Users