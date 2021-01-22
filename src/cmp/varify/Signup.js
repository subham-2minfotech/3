import React, { useState } from 'react'

function Signup() {
    const [formData, setFromData] = useState({
        fName: '',
        lName: '',
        mName: '',
        age: '',
        gender: '',
        email: '',
        password: '',
        cPassword: ''
    });

    const handleOnChange = (e) => {
        setFromData({ ...formData, [e.target.name]: e.target.value })
    }
    console.log("formData ", formData);

    return (
        <div>
            <form>
                <p>First Name :</p> <input type="text" placeholder="First Name" name="fName" value={formData && formData.fName || ''} onChange={handleOnChange} /> <br />
                <p>Last Name :</p> <input type="text" placeholder="Last Name" name="lName" value={formData && formData.lName || ''} onChange={handleOnChange} /> <br />
                <p>Middle Name :</p> <input type="text" placeholder="Middle Name" name="mName" value={formData && formData.mName || ''} onChange={handleOnChange} /> <br />
                <p>Age :</p> <input type="number" placeholder="Age" name="age" value={formData && formData.age || ''} onChange={handleOnChange} /> <br />
                <div>
                    <p>Gender :</p>
                    <input type="radio" name="gender" value="male" name="gender" value={formData && formData.gender || ''} onChange={handleOnChange} />Male
                    <input type="radio" name="gender" value="female" name="gender" value={formData && formData.gender || ''} onChange={handleOnChange} /> Female<br />
                </div>
                <p>Email :</p> <input type="email" placeholder="Email" name="email" value={formData && formData.email || ''} onChange={handleOnChange} /> <br />
                <p>Password :</p> <input type="password" placeholder="Password" /> <br />
                <p>Confirm Password :</p> <input type="password" placeholder="Confirm Password" /> <br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Signup

//<input type="radio" name="gender" value="male" checked> Male<br>
//<input type="radio" name="gender" value="female"> Female<br>