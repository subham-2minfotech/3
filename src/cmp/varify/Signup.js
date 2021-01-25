import React, { useState } from 'react'

function Signup() {
    const [formData, setFromData] = useState({
        fName: '',
        lName: '',
        mName: '',
        age: '',
        gender: '',
        qualification: '',
        email: '',
        password: '',
        cPassword: ''
    });
    const [errorData, setErrorData] = useState({
        fName: '',
        lName: '',
        mName: '',
        age: '',
        gender: '',
        qualification: '',
        email: '',
        password: '',
        cPassword: ''
    });

    const handleOnChange = (e) => {
        setFromData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        localStorage.setItem('Users', JSON.stringify(formData));
        console.log("onSubimt=======> ", formData);
        handleReSetForm()
    }

    const handleReSetForm = () => {
        setFromData({
            fName: '',
            lName: '',
            mName: '',
            age: '',
            gender: '',
            qualification: '',
            email: '',
            password: '',
            cPassword: ''
        })
    }

    const handleCheckPassword = () => {
        var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (formData.password.match(paswd)) {
            return true;
        }
        else {
            setErrorData({ ...errorData, ['password']: 'password should have uppercase, lowercase, char and number ' })
            return false;
        }
    }

    const handleInvalidError = () => {
        var eml = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (formData.email.match(eml)) {
            return true;
        }
        else {
            setErrorData({ ...errorData, ['password']: 'please enter valid email id ' })
            return false;
        }
    }

    const handleConfirmPassword = () => {
        if (formData.password === formData.cPassword) {
            return true;
        }
        else {
            setErrorData({ ...errorData, ['cPassword']: 'password and confirm password not match ' })
            return false;
        }
    }

    const handleFillFNameAttr = () => {
        if (formData.fName !== '') {
            return true;
        }
        else {
            setErrorData({ ...errorData, ['fName']: 'must fill this field' })
        }
    }
    
    const handleFillLNameAttr = () => {
        if (formData.lName !== '') {
            return true;
        }
        else {
            setErrorData({ ...errorData, ['lName']: 'must fill this field' })
        }
    } 
    
    const handleCheckAge = () => {
        if (formData.age < 109 && formData.age > 0) {
            return true;
        }
        else {
            setErrorData({ ...errorData, ['age']: 'password should have uppercase, lowercase, char and number ' })
            return false;
        }
    }

    return (
        <div style={{ marginLeft: '20%', marginBottom: '10%' }}>
            <form onSubmit={handleOnSubmit}>
                <label>
                    First Name :
                    <input type="text" placeholder="First Name" name="fName" value={formData && formData.fName || ''} onChange={handleOnChange} onBlur={(value) => handleFillFNameAttr(value)} />
                    {
                        (errorData && errorData.fName) && (
                            <div style={{ color: 'red' }}>{errorData && errorData.fName}</div>
                        )
                    }
                </label> <br />
                <label>
                    Last Name :
                    <input type="text" placeholder="Last Name" name="lName" value={formData && formData.lName || ''} onChange={handleOnChange} onBlur={(value) => handleFillLNameAttr(value)} />
                    {
                        (errorData && errorData.lName) && (
                            <div style={{ color: 'red' }}>{errorData && errorData.lName}</div>
                        )
                    }
                </label><br />
                <label>
                    Middle Name :
                    <input type="text" placeholder="Middle Name" name="mName" value={formData && formData.mName || ''} onChange={handleOnChange} />
                </label> <br />
                <label>
                    Age :
                    <input type="text" placeholder="Age" name="age" value={formData && formData.age || ''} onChange={handleOnChange} onBlur={(value) => handleCheckAge(value)} />
                    {
                        (errorData && errorData.age) && (
                            <div style={{ color: 'red' }}>{errorData && errorData.age}</div>
                        )
                    }
                </label><br />
                <label>
                    Gender :
                    <input type="radio" name="gender" value="male" checked={formData && formData.gender === "male" || ''} onChange={handleOnChange} />Male
                    <input type="radio" name="gender" value="female" checked={formData && formData.gender === "female" || ''} onChange={handleOnChange} /> Female
                </label> <br />
                <label>
                    Qualification :
                    <input type="checkbox" name="qualification" value="school" onChange={handleOnChange} /> School
                    <input type="checkbox" name="qualification" value="bachelor" onChange={handleOnChange} /> Bachelor
                    <input type="checkbox" name="qualification" value="masters" onChange={handleOnChange} /> Masters
                </label> <br />
                <label>
                    Email :
                    <input type="email" placeholder="Email" name="email" value={formData && formData.email || ''} onChange={handleOnChange} onBlur={(value) => handleInvalidError(value)} />
                    {
                        (errorData && errorData.email) && (
                            <div style={{ color: 'red' }}>{errorData && errorData.email}</div>
                        )
                    }
                </label><br />
                <label>
                    Password :
                    <input type="password" placeholder="Password" name="password" value={formData && formData.password || ''} onChange={handleOnChange} onBlur={(value) => handleCheckPassword(value)} />
                    {
                        (errorData && errorData.password) && (
                            <div style={{ color: 'red' }}>{errorData && errorData.password}</div>
                        )
                    }

                </label> <br />
                <label>
                    Confirm Password :
                    <input type="password" placeholder="Confirm Password" name="cPassword" value={formData && formData.cPassword || ''} onChange={handleOnChange} onBlur={(value) => handleConfirmPassword(value)} />
                    {
                        (errorData && errorData.cPassword) && (
                            <div style={{ color: 'red' }}>{errorData && errorData.cPassword}</div>
                        )
                    }
                </label> <br />
                <br />
                <button type="submit" value="Submit" >Submit </button>
                <button type="reset" onClick={handleReSetForm}>Clear </button>
            </form>
        </div>
    )
}
export default Signup

//{(value)=> CheckPassword(value)}