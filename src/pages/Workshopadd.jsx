import React from 'react'
import './Workshopadd.css'

const Workshopadd = () => {
  return (
    <div className='workshopAdd'>
      <div className='workshopItems'>
        <label>Name :  <input name="firstName" /></label>
      </div>
      <div>Workshop Description (max 50 words)
        <br />
        <textarea name="description" cols="30" rows="3"></textarea>
      </div>
      <div className="container">
        <div>
          <div className="container-head">Workshop Co-ordinator - 1 </div>
          <div className="workshopBox">
            <div className='workshopItems'>
              <label>Name :  <input name="firstName" /></label>
            </div>
            <div className='workshopItems'>
              <label>Phone :  <input name="firstName" /></label>
            </div>
            <div className='workshopItems'>
              <label>Email :  <input name="firstName" /></label>
            </div>
          </div>
        </div>
        <div>
          <div className="container-head">Workshop Co-ordinator - 2 </div>
          <div className="workshopBox">
            <div className='workshopItems'>
              <label>Name :  <input name="firstName" /></label>
            </div>
            <div className='workshopItems'>
              <label>Phone :  <input name="firstName" /></label>
            </div>
            <div className='workshopItems'>
              <label>Email :  <input name="firstName" /></label>
            </div>
          </div>
        </div>
        <div>
          <div className="container-head">Workshop Co-ordinator - 3 </div>
          <div className="workshopBox">
            <div className='workshopItems'>
              <label>Name :  <input name="firstName" /></label>
            </div>
            <div className='workshopItems'>
              <label>Phone :  <input name="firstName" /></label>
            </div>
            <div className='workshopItems'>
              <label>Email :  <input name="firstName" /></label>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className='submit-btn'>Submit</button>
    </div>
  )
}

export default Workshopadd