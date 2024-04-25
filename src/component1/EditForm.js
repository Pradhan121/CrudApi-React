import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";


const EditForm = () => {
    const data = {
        customerType: "",
        customerName: "",
        customerMobile: "",
        customerEmail: "",
        customerNo: "",
        birthday: "",
        healthInsurance: "",
    };

    const [inputdata, setInputdata] = useState(data);

    const handleInput = (e) => {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value });
    };
      let {id}=useParams();
      
      useEffect(() => {
        axios.get("https://hammerhead-app-tzlph.ondigitalocean.app/customers/" + id , inputdata)
        .then((resp) =>setInputdata(resp.data))
       .catch((err) => console.log(err));
        },[])
    

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .put(
                "https://hammerhead-app-tzlph.ondigitalocean.app/customers/"+ id , inputdata)
            .then((resp) => {
                console.log(resp);
                alert("Are you sure \n you want to update the customer");
            })
            .catch((err) => console.log(err));
    }
    // let { id } = useParams();

    // console.log("id===>" + id);

    return (
        <>

            <div className="app">
                
                <h2>Edit Customer</h2>
                <form>
                    <div>
                        <label>customerType: </label>
                        <input
                            type="number"
                            onChange={handleInput}
                            id="number"
                            name="customerType"
                            min="0"
                            max="50"
                            autoComplete="off"
                           value={inputdata.customerType}
                            
                        />
                     </div>
                         <br></br>
                         
                     <div className="container">
                        <label> customerName:</label>
                        <input
                            type="text"
                            onChange={handleInput}
                            id="username"
                            name="customerName"
                            autoComplete="off"
                            value={inputdata.customerName}
                        />
                     </div>
                        <br></br>
                       
                     <div className="container-line" >
                        <label> customerMobile:</label>
                         <input
                            type="tel"
                            onChange={handleInput}
                            id="mobileNo"
                            name="customerMobile"
                            autoComplete="off"
                            value={inputdata.customerMobile}
                         />
                     </div>
                        <br></br>
                       
                     <div className="show">
                        <label> customerEmail:</label>
                         <input
                            type="email"
                            onChange={handleInput}
                            id="emailId"
                            name="customerEmail"
                            autoComplete="off"
                            value={inputdata.customerEmail}
                         />
                     </div>
                        <br></br>
                       
                        <div>
                        <label> customerNo:</label>
                         <input
                            type="number"
                            onChange={handleInput}
                            id="counter"
                            name="customerNo"
                            min="0"
                            max="50"
                            autoComplete="off"
                            value={inputdata.customerNo}
                         />
                     </div>
                         <br></br>
                        
                     <div>
                        <label> birthday:</label>
                          <input
                            type="date"
                            onChange={handleInput}
                            id="dateOfBirth"
                            name="birthday"
                            autoComplete="off"
                            value={inputdata.birthday}
                         />
                     </div>
                         <br></br>
                        
                     <div className="demo">
                        <label> healthInsurance:</label>
                          <input
                            type="text"
                            onChange={handleInput}
                            id="number"
                            name="healthInsurance"
                            value={inputdata.healthInsurance}
                          />
                         <br></br>
                         <br></br>
                         
                      <button
                            onClick={handleSubmit}
                             style={{
                                 backgroundColor:"darkviolet",
                                 color: "white",
                                 marginBottom: "10px",
                                 marginLeft: "30px",
                                 borderRadius:"5px"
                              }}
                           
                                 type="submit"
                          >
                            Update
                         </button> 
                         <button style={{borderRadius:"5px", color:"black",marginLeft:'50px'}}>
                            Cancel
                         </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default EditForm;
