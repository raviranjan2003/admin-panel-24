import React from 'react'
import './Sponseradd.css'

const Sponseradd = () => {
  
    return (
        <div className='sponserAdd'>
          <div className='sponserItems'>
            <label>Name :  <input type="text" name="name" /></label>
            <label>Website :  <input type="text" name="webiste" /></label>
            <div className="photoUpload">
              Logo:
              <input
                style={{ border: "none" }}
                type="file"
                onChange="readURL(this)"
                accept="/Image/*"
              />
            </div>
          </div>
          
          <div className="container">
            <div>
              <div className="container-head">Contact Person </div>
              <div className="sponserBox">
                <div className='sponserItems'>
                  <label>Name :  <input name="name" /></label>
                </div>
                <div className='sponserItems'>
                  <label>Phone :  <input type="number" name="phone" /></label>
                </div>
                <div className='sponserItems'>
                  <label>Email :  <input type="email" name="email" /></label>
                </div>
              </div>
            </div>
        </div>
          <button type="submit" className='submit-btn'>Submit</button>
        </div>
      )
    }
    
export default Sponseradd