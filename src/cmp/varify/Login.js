import React, { useState } from "react";

function Login() {
    const [formData, setFromData] = useState({
        "email": '',
        "password": '',
    });

    const handleOnChange = (e) => {
        setFromData({ ...formData, [e.target.name]: e.target.value })//////////
    }
    const handleOnSubmit = (e) => {
        var x = JSON.parse(localStorage.getItem("User"));
        if (formData.email === x.email && formData.password === x.password){
            alert("you are entered");
            localStorage.setItem('login', true);
            console.log(JSON.parse(localStorage))
        }
        else{
            alert("email or password mismatch")
        }
    }
  
    return (
        <div style={{ marginLeft: '20%', marginBottom: '10%' }}>
            <form onSubmit={handleOnSubmit}>
                <label>
                    Email :
                    <input type="email" placeholder="Email" name="email" onChange={handleOnChange} />
                </label><br />
                <label>
                    Password :
                    <input type="password" placeholder="Password" name="password" onChange={handleOnChange}/>
                </label> <br />
                <br />
                <button type="submit" value="Submit" >Submit </button>
            </form>
        </div>
    )
}
export default Login