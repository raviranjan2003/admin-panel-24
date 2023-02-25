import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import "./Home.css";
import axios from "axios";
import { baseUrl } from "../API/api";
// let data = [];
// const DropDown = ({ currentMode }) => (
//   <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
//     <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
//   </div>
// );

const Home = (props) => {
  // const { currentColor, currentMode } = useStateContext();
  const { name, tfId } = props;
  const [visitor, setVisitor] = useState(null);
  const [institution, setInstitution] = useState(null);
  const [coordinator, setCoordinator] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(async () => {
    await axios.get(`${baseUrl}/coordinator/get`).then((result) => {
      // alert(J);
      const res = result;
      alert(JSON.stringify(res.data))
      setCoordinator(res);
    });
    await axios.get(`${baseUrl}/visitors/count`).then((result) => {
      const res = result;
      setVisitor(res.data.count);
    });

    await axios.get(`${baseUrl}/user/count/institution`).then((result) => {
      const res = result;
      setInstitution(res.data.count);
    });

    await axios.get(`${baseUrl}/user/count`).then((result) => {
      const res = result;
      setUser(res.data.count);
    });
  }, []);

  const columns = [
    {
      name: "Sr No.",
      selector: (row) => row.srNo,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "E-mail",
      selector: (row) => row.email,
    },
    {
      name: "Event",
      selector: (row) => row.event,
    },
  ];

  const data = [
    // {
    //   id: 1,
    //   srNo: 1,
    //   name: 'Ashish',
    //   phone: '+91XXXXXXX',
    //   email: 'ashish@gmail.com',
    //   event: 'Margadarshak',
    // },
    // {
    //   id: 2,
    //   srNo: 2,
    //   name: 'Ashish',
    //   phone: '+91XXXXXXX',
    //   email: 'ashish@gmail.com',
    //   event: 'Margadarshak',
    // },
  ];
  coordinator?.map((item=> {
    const coor = {
      id: item.coordinatorId,
      // srNo: item._id,
      name: item.coordinatorName,
      phone: item.coordinatorPhone,
      email: item.coordinatorEmail,
      // event: item.coordinatorEvent,
      // console.log("id", coor),
     
};
 data.push(coor);
}));
  console.log("dta", data);
  console.log("Gg", coordinator);

  return (
    <>
      <div className="home">
        <div className="heading">Namaste ! Super Admin</div>
        <div className="description">Your unique tF ID is t960</div>
        <div className="container">
          <div className="container1">
            <div className="number">{user}</div>
            <div className="num-desc">Registerations</div>
          </div>
          <div className="container2">
            <div className="number">{visitor}</div>
            <div className="num-desc">Unique Visitors</div>
          </div>
          <div className="container3">
            <div className="number">{institution}</div>
            <div className="num-desc">SLIETians</div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "auto",
          textAlign: "left",
          fontSize: "2.5em",
          margin: "0.5em",
        }}
      >
        Domain Coordinators
      </div>
      <div
        style={{
          border: "2px solid green",
          padding: "1.2em",
          borderRadius: "15px",
          background: "#006600",
        }}
      >
        <DataTable columns={columns} data={data} pagination theme="solarized" />
      </div>
    </>
  );
};

export default Home;
