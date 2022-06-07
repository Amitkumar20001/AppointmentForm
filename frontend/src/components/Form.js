import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Form() {

const navigate = useNavigate();    
const [user,setUser] = useState({
        name: "",
        email: "",
        phone: "",
        date: ""
    });

let name, value;    
const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value });

}
const PostData = async(e) =>{
    e.preventDefault();
    const {name,email,phone,date} = user;
    const res = await fetch("/register",{
        method: "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            name,email,phone,date
        })
    });
    await res.json();
    if(!name || !email || !phone || !date){
        alert("Please fill all the required fields");
    }else if(res.status === 422){
        alert("Some error occurred , please try again");
    }else{
        alert("Your appointment is successfully booked");
        navigate('/');
    }

}
  return (
    <>
         <form className="form" >
        <div className='form-heading'>
          <h1 >Appointment Form</h1>
        </div>
      
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            placeholder="Enter name"
            required
            onChange={handleInputs}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            placeholder="Enter email"
            required
            onChange={handleInputs}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Phone no.</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={user.phone}
            placeholder="Enter email"
            required
            onChange={handleInputs}
          ></input>
        </div>
        <div>
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={user.date}
            placeholder="Select date"
            required
            onChange={handleInputs}
          ></input>
        </div>
        <div>
            <input type="submit" name="get-appointment" id="submit" 
            className="submit-form" value="SUBMIT"
            onClick={PostData} />
        </div>
      
      </form>
    </>
  )
}
