import React from "react";
import "./Eventadd.css";

const Eventadd = () => {
  return (
    <div className="eventAdd">
      <div className="eventItems">
        <label>
          Domain Name : <input name="domainName" />
        </label>
        <label>
          Event Name : <input name="eventName" />
        </label>
        <div className="photoUpload">
          Event Picture:
          <input
            style={{ border: "none", paddingLeft: "4em" }}
            type="file"
            onChange="readURL(this)"
            accept="/Image/*"
          />
        </div>
      </div>
      <div
        style={{ width: "auto", justifyContent: "right", textAlign: "center" }}
      >
        Event Description (max 50 words)
        <br />
        <textarea name="description" cols="40" rows="5"></textarea>
      </div>

      <div className="container">
        <div>
          <div className="container-head">Event Co-ordinator - 1 </div>
          <div className="eventBox">
            <div className="eventItems">
              <label>
                Name : <input type="text" name="name" />
              </label>
            </div>
            <div className="eventItems">
              <label>
                Phone : <input type="number" name="phone" />
              </label>
            </div>
            <div className="eventItems">
              <label>
                Email : <input type="email" name="email" />
              </label>
            </div>
            <div className="photoUpload">
              <input
                style={{ border: "none" }}
                type="file"
                onChange="readURL(this)"
                accept="/Image/*"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="container-head">Event Co-ordinator - 2 </div>
          <div className="eventBox">
            <div className="eventItems">
              <label>
                Name : <input type="text" name="name" />
              </label>
            </div>
            <div className="eventItems">
              <label>
                Phone : <input type="number" name="phone" />
              </label>
            </div>
            <div className="eventItems">
              <label>
                Email : <input type="email" name="email" />
              </label>
            </div>
            <div className="photoUpload">
              <input
                style={{ border: "none" }}
                type="file"
                onChange="readURL(this)"
                accept="/Image/*"
              />
            </div>
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
                Date : <input type="date" name="date" />
              </label>
            </div>
            <div className="eventItems">
              <label>
                Time : <input type="time" name="time" />
              </label>
            </div>
            <div className="eventItems">
              <label>
                Venue : <input name="venue" />
              </label>
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </div>
  );
};

export default Eventadd;
