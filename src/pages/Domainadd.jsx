import React from 'react'
import './Domainadd.css'

const Domainadd = () => {
  return (
    <div className='domainAdd'>
      <div className='domainItems'>
        <label>Name :  <input name="firstName" /></label>
        <div className="photoUpload">
          Domain Picture:
          <input
            style={{ border: "none" }}
            type="file"
            onChange="readURL(this)"
            accept="/Image/*"
          />
        </div>
      </div>
      <div style={{ width: "auto", justifyContent: "right", textAlign: "center" }}>Domain Description (max 50 words)
        <br />
        <textarea name="description" cols="40" rows="5"></textarea>
      </div>

      <div className="container">
        <div>
          <div className="container-head">Domain Co-ordinator - 1</div>
          <div className="domainBox">
            <div className="domainItems">
              <label>
                Name : <input type="text" name="name" />
              </label>
            </div>
            <div className="domainItems">
              <label>
                Phone : <input type="number" name="phone" />
              </label>
            </div>
            <div className="domainItems">
              <label>
                Email : <input type="email" name="email" />
              </label>
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
          <div className="container-head">Domain Co-ordinator - 2 </div>
          <div className="domainBox">
            <div className="domainItems">
              <label>
                Name : <input type="text" name="name" />
              </label>
            </div>
            <div className="domainItems">
              <label>
                Phone : <input type="number" name="phone" />
              </label>
            </div>
            <div className="domainItems">
              <label>
                Email : <input type="email" name="email" />
              </label>
            </div>
            <div className="photoUpload">
            Picture :<input
                style={{ border: "none" }}
                type="file"
                onChange="readURL(this)"
                accept="/Image/*"
              />
            </div>
          </div>
        </div>


        <div>
          <div className="container-head">Faculty Advisor</div>
          <div className="domainBox">
            <div className="domainItems">
              <label>
                Name : <input type="text" name="name" />
              </label>
            </div>
            <div className="domainItems">
              <label>
                Phone : <input type="number" name="phone" />
              </label>
            </div>
            <div className="domainItems">
              <label>
                Email : <input type="email" name="email" />
              </label>
            </div>
            <div className="photoUpload">
              Picture :<input
                style={{ border: "none" }}
                type="file"
                onChange="readURL(this)"
                accept="/Image/*"
              />
            </div>
          </div>

        </div>



      </div>

      <button type="submit" className='submit-btn'>Submit</button>


    </div>
  )
}

export default Domainadd