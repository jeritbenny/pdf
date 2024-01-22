import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "./Header";
import "./Receipt.css";
function Recipt() {
  const [formData] = useState(JSON.parse(localStorage.getItem("formData")));
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <div ref={componentRef}>
        <div className="wrap">
        <Header />
        <div className="data-div">
          <div className="box-one">
            <div className="sub-box">
              <p>
                <b>Name</b> : {formData.name}
              </p>
              <p>
                <b>Hop No</b> :{formData.phoneNumber}
              </p>
              <p>
                <b>Age</b> : {formData.age}
              </p>
              <p>
                <b>Gender</b> : {formData.gender}
              </p>
            </div>
          </div>

          <div className="box-two">
            <div className="sub-box1">
              <p>
                <b>Speciality</b> : {formData.speciality}
              </p>
              <p>
                <b>Date</b> :  {formData.date}
              </p>
              <p>
                <b>unitName</b> : {formData.unitName}
              </p>
              <p>
                <b>doctor Name</b> : {formData.doctorName}
              </p>
            </div>
          </div>
        </div>
        <div>
        <p style={{marginLeft:"120px", marginBottom:"30px"}}>
                <b>Address</b> : {formData.address}
              </p>
        </div>
       
       <div className="table-div">
        <table>
          <thead>
            <tr>
              <th>Sl.no</th>
              <th>Name of medicine</th>
              <th>dosage</th>
              <th>Duration</th>
              <th>Qty</th>
              <th>Instruction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>paracetamol</td>
              <td>1 -1 - 1</td>
              <td>1year</td>
              <td>180</td>
              <td>Alternate days</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="detail-div">

          <div className="detail">
            <div className="detail1">Provisional diagnosis :</div>
            <div className="detail2">Choose the approach that best fits your overall layout and styling requirements. Flexbox is generally recommended for modern layout design due to its flexibility and responsiveness.Choose the approach that best fits your overall layout and styling requirements. Flexbox is generally recommended for modern layout design due to its flexibility and responsiveness.</div>
          </div>
          <div className="detail">
            <div className="detail1">Special Instruction :</div>
            <div className="detail2">Choose the approach that best fits your overall layout and styling requirements. Flexbox is generally recommended for modern layout design due to its flexibility and responsiveness.Choose the approach that best fits your overall layout and styling requirements. Flexbox is .</div>
          </div>
          <div className="detail">
            <div className="detail1">Specific Advise :</div>
            <div className="detail2">Exerice as advaced,do not sit on ground</div>
          </div>
          <div className="detail">
            <div className="detail1">Next Visit :</div>
            <div className="detail2">16-4-24</div>
          </div>
          <div className="detail">
            <div className="detail1">Diet :</div>
            <div className="detail2">Eat a lot hehehi.</div>
          </div>
         
        </div>
        <hr/>
        <div className="end-div">
         <div className="last-div">
                     <div>
                         <div className="date">
                            <div className="date-align">Date :</div>
                            <div><hr style={{color:"black",fontWeight:"",width:"200px",marginTop:"25px"}} /></div>
                         </div>
                         <div  className="date">
                            <div className="date-align">Pharmacist Signature :</div>
                            <div><hr style={{color:"black",fontWeight:"",width:"200px",marginTop:"25px"}}/></div>
                         </div>
                         <div  className="date">
                            <div className="date-align">Pharmacist Name :</div>
                            <div><hr style={{color:"black",fontWeight:"",width:"200px",marginTop:"25px"}}/></div>
                         </div>
                     </div>
                     <div>
                     <div><hr style={{color:"black",fontWeight:"",width:"200px",marginTop:"25px"}}/>
                     <p style={{textAlign:"center",marginTop:"10px"}}>Doctor signature & stamp</p>
                     <p style={{textAlign:"center",marginTop:"10px"}}>{formData.doctorName}</p>

                     </div>

                     </div>
         </div>
         </div>
        </div>
      </div>

      <button className="btn" onClick={handlePrint}>Download PDF</button>
    </div>
  );
}

export default Recipt;
