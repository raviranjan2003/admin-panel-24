import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../API/api';
function ProfileUpdate() {
  const [coordinator, setCoordinator] = useState(null);
  const [name,setName]=useState("");
  const [phone,setPhone]=useState();
  const [branch,setBranch]=useState();
  const navigate= useNavigate();
    useEffect(async () => {
        await axios.post(`${baseUrl}/coordinator/getById`, {id: '6402bbb96b7c2169545d25a0'}).then((result) => {
          const res = result;
          setCoordinator(res.data.coordinator);
        });
      })
    const submit = () =>{
        const email = coordinator.coordinatorEmail;
        console.log("email",email)
        const user= {
            coordinatorName:name,
            coordinatorPhone:phone,
            coordinatorBranch:branch,
            coordinatorEmail:email
        };
        console.log("emaiisfsdgl",user)
        axios.post(`${baseUrl}/coordinator/update`,user).then((res)=>{
            console.log("resul",res)
            if(res.status===201){
                navigate("/profile")
            }
            else{
                alert("you can try again")
            }
        })
    }
  return (
    <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
      <div className="ProfileWrapper" style={{width:"50%",margin:'0px auto',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <img src="/dummy.jpg" alt="" width="200px" />
        <div className="profileInfo" style={{width:"90%",margin:"30px auto",textAlign:"center"}}>
            <div className="profileItem" style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"50%"}}>
                <h1>Name:</h1>
                <input type="text" 
                onChange={(e)=>setName(e.target.value)}
                required
                />
            </div>
            
            <div className="profileItem" style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"50%"}}>
                <h1>Phone:</h1>
                <input type="number" 
                onChange={(e)=>setPhone(e.target.value)}
                required
                />
            </div>
            <div className="profileItem" style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"50%"}}>
                <h1>Branch:</h1>
                <select
                sx={{ height: "10px" }}
                onChange={(e) => setBranch(e.target.value)}
                id="branch"
                name="branch"
                value={branch}
                required
              >
                <option value="0">Branch Enrolled</option>
                <option value="Aeronautical Engineering">
                  Aeronautical Engineering
                </option>
                <option value="Aerospace Engineering">
                  Aerospace Engineering
                </option>
                <option value="Automobile Engineering">
                  Automobile Engineering
                </option>
                <option value="Biomedical Engineering">
                  Biomedical Engineering
                </option>
                <option value="Biotechnology Engineering">
                  Biotechnology Engineering
                </option>
                <option value="Ceramic Engineering">Ceramic Engineering</option>
                <option value="Chemical Engineering">
                  Chemical Engineering
                </option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Communications Engineering">
                  Communications Engineering
                </option>
                <option value="Computer Science Engineering">
                  Computer Science Engineering
                </option>
                <option value="Construction Engineering">
                  Construction Engineering
                </option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Electronics & Communication Engineering">
                  Electronics & Communication Engineering
                </option>
                <option value="Electronics Engineering">
                  Electronics Engineering
                </option>
                <option value="Environmental Engineering">
                  Environmental Engineering
                </option>
                <option value="Food Engineering and Technology">
                  Food Engineering and Technology
                </option>
                <option value="Instrumentation and Control Engineering">
                Instrumentation and Control Engineering
                </option>
                <option value="Industrial Engineering">
                  Industrial Engineering
                </option>
                <option value="Marine Engineering">Marine Engineering</option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Mechatronics Engineering">
                  Mechatronics Engineering
                </option>
                <option value="Metallurgical Engineering">
                  Metallurgical Engineering
                </option>
                <option value="Mining Engineering">Mining Engineering</option>
                <option value="Petroleum Engineering">
                  Petroleum Engineering
                </option>
                <option value="Power Engineering">Power Engineering</option>
                <option value="Production Engineering">
                  Production Engineering
                </option>
                <option value="Robotics Engineering">
                  Robotics Engineering
                </option>
                <option value="Structural Engineering">
                  Structural Engineering
                </option>
                <option value="Telecommunication Engineering">
                  Telecommunication Engineering
                </option>
                <option value="Textile Engineering">Textile Engineering</option>
                <option value="Tool Engineering">Tool Engineering</option>
                <option value="Transportation Engineering">
                  Transportation Engineering
                </option>
              </select>
             
            </div>
            
        </div>
        <button style={{border:"2px solid green",padding:"5px"}} onClick={submit}>Submit</button>
      </div>
    </div>
  )
}

export default ProfileUpdate;
