import React from 'react'
import './Domainadd.css'

const Domainadd = () => {
  return (
    <div className='domainAdd'>
      <div className='domainItems'>
        <label>Name :  <input name="firstName" /></label>
      </div>
      <div>Domain Description (max 50 words)
        <br />
        <textarea name="description" cols="30" rows="3"></textarea>
      </div>

      <div className="container">
        <div>
          <div className="container-head">Domain Co-ordinator -1 </div>
          <div className="domainBox">
            <div className='domainItems'>
              <label>Name :  <input name="firstName" /></label>
            </div>
            <div className='domainItems'>
              <label>Phone :  <input name="firstName" /></label>
            </div>
            <div className='domainItems'>
              <label>Email :  <input name="firstName" /></label>
            </div>
          </div>

        </div>


        <div>
          <div className="container-head">Domain Co-ordinator - 2 </div>
          <div className="domainBox">
            <div className='domainItems'>
              <label>Name :  <input name="firstName" /></label>
            </div>
            <div className='domainItems'>
              <label>Phone :  <input name="firstName" /></label>
            </div>
            <div className='domainItems'>
              <label>Email :  <input name="firstName" /></label>
            </div>
          </div>

        </div>


        <div>
          <div className="container-head">Domain Co-ordinator - 3 </div>
          <div className="domainBox">
            <div className='domainItems'>
              <label>Name :  <input name="firstName" /></label>
            </div>
            <div className='domainItems'>
              <label>Phone :  <input name="firstName" /></label>
            </div>
            <div className='domainItems'>
              <label>Email :  <input name="firstName" /></label>
            </div>
          </div>

        </div>



      </div>

      <button type="submit" className='submit-btn'>Submit</button>


    </div>
  )
}

export default Domainadd