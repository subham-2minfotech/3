import React from 'react'

export const Training = () => {
    const [state, setState] = React.useState({
        "name": "",
        "age": "",
        "phone": "",
        "email": "",
        "gender": "",
        "qualification": "",
        "password": '',
        "cPassword": ''
    });

    const handleReSetForm = () => {
        setState({
            "name": "",
            "age": "",
            "phone": "",
            "email": "",
            "gender": "",
            "qualification": "",
            "password": '',
            "cPassword": ''
        })
    }

    const handleOnSubmit = (event) => {
        console.log("User Data => ", state)
        event.preventDefault();
        if (handleFillNameAttr() && handleFillAgeAttr() && handleFillNumberAttr() && handleFillEmailAttr() && handleFillPasswordAttr() && handleFillCPasswordAttr()) {
            localStorage.setItem('User', JSON.stringify(state))
        } 
        else {
            alert("Please Check Error in Red Color")
        }     
    }

    const handleOnChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const [errorDataName, setErrorDataName] = React.useState({
        "errname": [],
    });

    const [errorDataPhone, setErrorDataPhone] = React.useState({
        "errphone": [],
    });

    const [errorDataAge, setErrorDataAge] = React.useState({
        "errage": [],
    });

    const [errorDataEmail, setErrorDataEmail] = React.useState({
        "erremail": [],
    });

    const [errorDataPassword, setErrorDataPassword] = React.useState({
        "errpassword": []
    })

    const [errrorDataCPassword, setErrrorDataCPassword] = React.useState({
        "errcpassword": [],
    })

    const handleFillNameAttr = (e) => {
        if (state.name !== '') {
            let oldState = { ...errorDataName }
            oldState.errname = ''
            setErrorDataName(oldState)
            return true
        }
        else {
            let oldState = { ...errorDataName }
            oldState.errname = 'must fill this field0000000000'
            setErrorDataName(oldState)
            return false
        }
    }

    const handleFillAgeAttr = (e) => {
        console.log("age age age age age age age age")
        if (state.age < 109 && state.age > 0) {
            console.log("not empty")
            let oldState = { ...errorDataAge }
            oldState.errage = ''
            setErrorDataAge(oldState)
            return true
        }
        else {
            console.log("EMPTY empty")
            let oldState = { ...errorDataAge }
            oldState.errage = 'Please fill valid age'
            setErrorDataAge(oldState)
        }
    }

    const handleFillNumberAttr = e => {
        console.log("phone phone phone phone phone phone")
        if (state.phone > 0) {
            console.log("not empty")
            let oldState = { ...errorDataPhone }
            oldState.errphone = ''
            setErrorDataPhone(oldState)
            return true
        }
        else {
            console.log("EMPTY empty")
            let oldState = { ...errorDataPhone }
            oldState.errphone = 'Please fill valid age'
            setErrorDataPhone(oldState)
            return false
        }
    }

    const handleFillEmailAttr = (e) => {
        console.log("email email email email email")
        var eml = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (state.email.match(eml)) {
            console.log("not empty")
            let oldState = { ...errorDataEmail }
            oldState.erremail = ''
            setErrorDataEmail(oldState)
            return true
        }
        else {
            console.log("EMPTY empty")
            let oldState = { ...errorDataEmail }
            oldState.erremail = "Please enter a valid email ID"
            setErrorDataEmail(oldState)
            return false
        }
    }

    const handleFillPasswordAttr = (e) => {
        console.log("password password password password password")
        var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (state.password.match(paswd)) {
            console.log("not empty")
            let oldState = { ...errorDataPassword }
            oldState.errpassword = ''
            setErrorDataPassword(oldState)
            return true
        }
        else {
            console.log("EMPTY empty")
            let oldState = { ...errorDataPassword }
            oldState.errpassword = "Please enter a valid email ID"
            console.log("password----> ", oldState)
            setErrorDataPassword(oldState)
            return false
        }
    }

    const handleFillCPasswordAttr = (e) => {
        console.log("Confirm Password - Confirm Password - Confirm Password ")
        if(state.cPassword  === state.password) {
            console.log("not empty")
            let oldState = {...errrorDataCPassword}
            oldState.errcpassword = ""
            setErrrorDataCPassword(oldState)
            return true
        }
        else {
            console.log("EMPTY empty")
            let oldState = { ...errrorDataCPassword }
            oldState.errcpassword = "Your Password is not match"
            console.log("cPassword----> ", oldState)
            setErrrorDataCPassword(oldState)
            return false
        }
    }

    console.log("state----> ", state)

    return (
        <div style={{ marginLeft: '20%', marginBottom: '10%' }}>
            <form onSubmit={handleOnSubmit}> 
                <label>
                <p>
                    Name :
                    <input type="text" name="name"
                        value={state && state.name || ''}
                        onChange={handleOnChange}
                        onBlur={handleFillNameAttr}
                    />
                    <div style={{ color: 'red' }}>
                        {errorDataName && errorDataName.errname}
                    </div>
                </p>
                </label>
                <label>
                    <p>
                        Age :
                        <input type="text" name="age"
                            value={state && state.age || ''}
                            onChange={handleOnChange}
                            onBlur={handleFillAgeAttr}
                        />
                        <div style={{ color: 'red' }}>
                            {errorDataAge && errorDataAge.errage}
                        </div>
                    </p>
                </label>
                <label>
                    <p>
                        Phone Number :
                        <input type="number" name="phone"
                            value={state && state.phone || ''}
                            onChange={handleOnChange}
                            onBlur={handleFillNumberAttr}
                        />
                        <div style={{ color: 'red' }}>
                            {errorDataPhone && errorDataPhone.errphone}
                        </div>
                    </p>
                </label>
                <label>
                    <p>
                        Email :
                        <input type="email" name="email"
                            value={state && state.email || ''}
                            onChange={handleOnChange}
                            onBlur={handleFillEmailAttr}
                        />
                        <div style={{ color: 'purple' }}>
                            {errorDataEmail && errorDataEmail.erremail}
                        </div>
                    </p>
                </label>
                <label>
                    <p>
                        Gender:
                        <input type="radio" name="gender" value="male" onChange={handleOnChange} />Male
                        <input type="radio" name="gender" value="female" onChange={handleOnChange} />Female
                    </p>
                </label>
                <label>
                    <p>
                        Qualification :
                        <input type="checkbox" name="qualification" value="school" onChange={handleOnChange} /> School
                        <input type="checkbox" name="qualification" value="bachelor" onChange={handleOnChange} /> Bachelor
                        <input type="checkbox" name="qualification" value="masters" onChange={handleOnChange} /> Masters
                    </p>
                </label>
                <label>
                    <p>
                        Password :
                        <input type="password" name="password"
                            value={state.password}
                            onChange={handleOnChange}
                            onBlur={handleFillPasswordAttr}
                        />
                        <div style={{ color: 'red' }}>
                            {errorDataPassword && errorDataPassword.errpassword}
                        </div>
                    </p>
                </label>
                <label>
                    <p>
                        Confirm Password :
                        <input type="password" name="cPassword" 
                            value={state.cPassword} 
                            onChange={handleOnChange} 
                            onBlur={handleFillCPasswordAttr}
                        />
                        <div style={{ color: 'red'}}>
                            {errrorDataCPassword && errrorDataCPassword.errcpassword}
                        </div>
                   </p>
                </label>
                <br />
                <br />
                <button type="submit" value="Submit" >Submit </button>
                <button type="reset" onClick={handleReSetForm}>Clear </button>
            </form>     
        </div>
    )
}
