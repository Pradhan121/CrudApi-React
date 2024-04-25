import React, { useState } from "react";
import axios from "axios";


  const Form = () => {
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

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post(
                "https://hammerhead-app-tzlph.ondigitalocean.app/customers",
                inputdata
            )
            .then((resp) => {
                console.log(resp.inputdata);
                alert("Are you sure");
            })
         .catch((err) => console.log(err));
    }

    return (
        <>
           <div>
            <div className=" w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h2>Add Customer</h2>
                <form>
                    <div>
                        <label>customerType:
                        <input
                            type="number"
                            onChange={handleInput}
                            id="number"
                            name="customerType"
                            min="0"
                            max="50"
                            value={inputdata.customerType}
                            autoComplete="off"
                        />
                        </label>
                           <br></br>
                        <label> customerName:
                        <input
                            type="text"
                            onChange={handleInput}
                            id="username"
                            name="customerName"
                            value={inputdata.customerName}
                            autoComplete="off"
                            placeholder="enter your name"
                        />
                        </label>

                          <br></br>
                          
                        <label> customerMobile:
                        <input
                            type="tel"
                            onChange={handleInput}
                            id="mobileNo"
                            name="customerMobile"
                            value={inputdata.customerMobile}
                            autoComplete="off"
                            placeholder="enter your mobileNumber"
                        />
                        </label>
                          <br></br>
                           
                        <label> customerEmail:  
                          <input                     
                            type="email"
                            onChange={handleInput}
                            id="emailId"
                            name="customerEmail"
                            value={inputdata.customerEmail}
                            autoComplete="off"
                        />
                        </label>
                          <br></br>
                         
                      <label> customerNo:
                        <input
                            type="number"
                            onChange={handleInput}
                            id="counter"
                            name="customerNo"
                            min="0"
                            max="50"
                            value={inputdata.customerNo}
                            autoComplete="off"
                        />
                       </label>
                          <br></br>
                         
                      <label> birthday:
                        <input
                            type="date"
                            onChange={handleInput}
                            id="dateOfBirth"
                            name="birthday"
                            value={inputdata.birthday}
                            autoComplete="off"
                        />
                      </label>
                        <br></br>
                        
                        <label> healthInsurance:
                        <input
                            type="text"
                            onChange={handleInput}
                            id="number"
                            name="healthInsurance"
                            value={inputdata.healthInsurance}
                        />
                      </label>
                        <br></br>
                       
                        <button
                            onClick={handleSubmit}
                            style={{
                                backgroundColor: "black",
                                color: "white",
                                marginBottom: "10px",
                            }}
                            type="submit"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
         </div>
        </>
    );
};
export default Form;
