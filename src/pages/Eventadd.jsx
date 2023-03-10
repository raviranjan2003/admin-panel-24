import React, {useState,useEffect} from "react";
import "./Eventadd.css";
import axios from 'axios';
import { baseUrl } from "../API/api";
const Eventadd = () => {
  const [domainName,setDomainName] = useState("");
  const [eventName,setEventName] = useState("");
  const [eventImg,setEventImg] = useState("");
  const [eventDes,setEventDes] = useState("");
  const [eventCoor1,setEventCoor1] = useState("");
  const [eventCoor2,setEventCoor2] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");
  const [venue,setVenue] = useState("");
  const[coordinators,setCoordinators]=useState(null);
  useEffect(() => {
    axios
    .get(`${baseUrl}/coordinator/get`)
    .then((result) => {
      const res = result.data;
      setCoordinators(res);
    })
    .catch((err) => {
      console.log(err);
      return;
    });
  }, [])
  
  const postData = ()=>{
    const event = {
      eventName:eventName,
      eventDescription:eventDes,
      domainId:"63fb7d86f7d2d6f924b43583",
      startDate:date,
      // studentCoordinator:[
      //   {eventCoor1},
      //   {eventCoor2}
      // ],
      // eventPhoto:eventImg
      // facultyCoordinator:{
      //   coordinatorName:eventCoor1,
      //   coordinatorEmail:eventCoorEmail1,
      //   coordinatorPhone:eventCoorPhone1,
      //   photo:eventCoorPhoto1
      // },
      // eventPhoto:eventImg
    }
    // axios.post(`${baseUrl}/event/create`,event).then((res)=>alert(res));
    // etIsLoading(true);
    axios
      .post(`${baseUrl}/event/create`, event)
      .then((result) => {
        const res = result;
       console.log("fnal",res);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  }
  return (
    <div className="eventAdd">
      <div className="eventItems">
        <label>
          Domain Name : <input name="domainName" onChange={(e)=>setDomainName(e.target.value)}/>
        </label>
        <label>
          Event Name : <input name="eventName" onChange={(e)=>setEventName(e.target.value)} />
        </label>
        <div className="photoUpload">
          Event Picture:
          <input
            style={{ border: "none", paddingLeft: "4em" }}
            type="file"
            onChange={(e)=>setEventImg(e.target.value)}
            accept="/Image/*"
          />
        </div>
      </div>
      <div
        style={{ width: "auto", justifyContent: "right", textAlign: "center" }}
      >
        Event Description (max 50 words)
        <br />
        <textarea name="description" cols="40" rows="5" onChange={(e)=>setEventDes(e.target.value)} ></textarea>
      </div>

      <div className="container">
        <div>
          <div className="container-head">Event Co-ordinator - 1 </div>
          <div className="eventBox">
          <select
                // className={styles.signup__select}
                sx={{height:"10px"}}
                onChange={(e) => setEventCoor1(e.target.value)}
                // id='branch'
                name='role'
                // value={branch}
                required
              >
                {coordinators?.map((item)=>
                  {
                    console.log(item)
                    return <option value={item._id} >{item.coordinatorName}</option>
                  }
                )}
                </select>
           
          </div>
        </div>

        <div>
          <div className="container-head">Event Co-ordinator - 2 </div>
          <div className="eventBox">
          <select
                // className={styles.signup__select}
                sx={{height:"10px"}}
                onChange={(e) => setEventCoor2(e.target.value)}
                // id='branch'
                name='role'
                // value={branch}
                required
              >
                {coordinators?.map((item)=>
                  {
                    console.log(item)
                    return <option value={item._id} >{item.coordinatorName}</option>
                  }
                )}
                </select>
           
          </div>
        </div>

        <div>
          <div
            className="container-head"
            style={{ marginBottom: "1.8em" }}
          ></div>
          <div className="eventBox">
            <div className="eventItems">
              <label>
                Date : <input type="date" name="date" onChange={(e)=>setDate(e.target.value)}  />
              </label>
            </div>
            <div className="eventItems">
              <label>
                Time : <input type="time" name="time" onChange={(e)=>setTime(e.target.value)} />
              </label>
            </div>
            <div className="eventItems">
              <label>
                Venue : <input name="venue" onChange={(e)=>setVenue(e.target.value)} />
              </label>
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="submit-btn" onClick={postData}>
        Submit
      </button>
    </div>
  );
};

export default Eventadd;
