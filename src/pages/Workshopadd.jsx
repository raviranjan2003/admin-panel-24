import React from 'react'
import './Workshopadd.css'

const Workshopadd = () => {
  return (
    <div className='workshopAdd'>
      <div className='workshopItems'>
        <label>Name :  <input type="text" name="name" /></label>
        <div className="photoUpload">
          Workshop Picture:
          <input
            style={{ border: "none" }}
            type="file"
            onChange="readURL(this)"
            accept="/Image/*"
          />
        </div>
      </div>
      <div style={{ width: "auto", justifyContent: "right", textAlign: "center" }}>Workshop Description (max 50 words)
        <br />
        <textarea name="description" cols="30" rows="3"></textarea>
      </div>
      <div className="container">
        <div>
          <div className="container-head">Co-ordinator - 1 </div>
          <div className="workshopBox">
            <div className='workshopItems'>
              <label>Name :  <input name="name" /></label>
            </div>
            <div className='workshopItems'>
              <label>Phone :  <input type="number" name="phone" /></label>
            </div>
            <div className='workshopItems'>
              <label>Email :  <input type="email" name="email" /></label>
            </div>
            Picture :<div className="photoUpload">
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
          <div className="container-head">Co-ordinator - 2 </div>
          <div className="workshopBox">
            <div className='workshopItems'>
              <label>Name :  <input name="name" /></label>
            </div>
            <div className='workshopItems'>
              <label>Phone :  <input type="number" name="phone" /></label>
            </div>
            <div className='workshopItems'>
              <label>Email :  <input type="email" name="email" /></label>
            </div>
            Picture :<div className="photoUpload">
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
          <div className="container-head" style={{ marginBottom: "1.8em" }}></div>
          <div className="workshopBox">
            <div className='workshopItems'>
              <label>Date : <input type="date" name="date" /></label>
            </div>
            <div className='workshopItems'>
              <label>Time : <input type="time" name="time" /></label>
            </div>
            <div className='workshopItems'>
              <label>Venue : <input name="venue" /></label>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className='submit-btn'>Submit</button>
    </div>
  )
}

export default Workshopadd