import React from 'react'
import './Eventadd.css'

const Eventadd = () => {
  return (
    <div className='eventAdd'>
      <div className='eventItems'>
        <label>Domain Name :  <input name="domainName" /></label>
        <label>Event Name :  <input name="eventName" /></label>
      </div>
      <div>Event Description (max 50 words)
        <br />
        <textarea name="description" cols="30" rows="3"></textarea>
      </div>

      <div className="container">
        <div>
          <div className="container-head">Event Co-ordinator - 1 </div>
          <div className="eventBox">
            <div className='eventItems'>
              <label>Name :  <input name="firstName" /></label>
            </div>
            <div className='eventItems'>
              <label>Phone :  <input name="firstName" /></label>
            </div>
            <div className='eventItems'>
              <label>Email :  <input name="firstName" /></label>
            </div>
          </div>

        </div>


        <div>
          <div className="container-head">Event Co-ordinator - 2 </div>
          <div className="eventBox">
            <div className='eventItems'>
              <label>Name :  <input name="firstName" /></label>
            </div>
            <div className='eventItems'>
              <label>Phone :  <input name="firstName" /></label>
            </div>
            <div className='eventItems'>
              <label>Email :  <input name="firstName" /></label>
            </div>
          </div>

        </div>


        <div>
          <div className="container-head">Event Co-ordinator - 3 </div>
          <div className="eventBox">
            <div className='eventItems'>
              <label>Name :  <input name="firstName" /></label>
            </div>
            <div className='eventItems'>
              <label>Phone :  <input name="firstName" /></label>
            </div>
            <div className='eventItems'>
              <label>Email :  <input name="firstName" /></label>
            </div>
          </div>

        </div>



      </div>

      <button type="submit" className='submit-btn'>Submit</button>


    </div>
  )
}

export default Eventadd