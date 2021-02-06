import React from 'react'

export const Training = () => {
    const [state, setState] = React.useState(
        [
            {
                "name": "",
                "age": "52",
                "email": "",
                "gender": "",
                "qualification": "",
                "phone": [],
                "password": '',
                "cPassword": ''
            }
        ]
    );

    const addUserBlock = (e) => {
        console.log("console of e -> ", e)
        let oldState = [...state];
        oldState.push(
            {
                "name": "",
                "age": "",
                "email": "",
                "gender": "",
                "qualification": "",
                "phone": [],
                "password": '',
                "cPassword": ''
            }
        )
        setState(oldState)
    }

    const addPhoneBlock = (e, index) => {
        let oldState = [...state]
        console.log(oldState[index].phone)
        oldState[index].phone.push("")
        setState(oldState)
    }

    const handleOnChange = (e, index) => {
        let oldState = [...state];
        console.log(e)
        console.log("oldState[index].name ----> ", oldState[index].age)
        console.log("index is : ", index)
        const { name, value } = e.target
        oldState[index][name] = value
        setState(oldState)
        // console.log(oldState)
        // console.log("oldState[index] ----> ", oldState[index])  
        // console.log("e.target.name ----> ", e.target.name)
        // console.log("e.target.value ---->", e.target.value)
    }

    const handleOnChangeNumber = (e, index, i) => {
        let oldState = [...state]
        const { value } = e.target
        oldState[index].phone[i] = value
        setState(oldState)
    }

    const [errorDataName, setErrorDataName] = React.useState(
        {
            "errname": [],
        },
    );
    console.log("errname ---> ", errorDataName)

    const [errorDataAge, setErrorDataAge] = React.useState({
        "errage": [],
    });

    const [errorDataEmail, setErrorDataEmail] = React.useState({
        "erremail": [],
    });

    const[errorDataPassword, setErrorDataPassword] = React.useState({
        "errpassword": []
    })

    const handleFillNameAttr = (e, index) => {
        if (state[index].name !== '') {
            let oldState = { ...errorDataName }
            oldState.errname[index] = ''
            setErrorDataName(oldState)
        }
        else {
            let oldState = { ...errorDataName }
            oldState.errname[index] = 'must fill this field0000000000'
            setErrorDataName(oldState)
        }
    }

    const handleFillAgeAttr = (e, index) => {
        console.log("age age age age age age age age")
        if (state[index].age < 109 && state[index].age > 0) {
            console.log("not empty")
            let oldState = { ...errorDataAge }
            oldState.errage[index] = ''
            setErrorDataAge(oldState)
        }
        else {
            console.log("EMPTY empty")
            let oldState = { ...errorDataAge }
            oldState.errage[index] = 'Please fill valid age'
            setErrorDataAge(oldState)
        }
    }

    const handleFillEmailAttr = (e, index) => {
        console.log("email email email email email")
        var eml = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (state[index].email.match(eml)) {
            console.log("not empty")
            let oldState = { ...errorDataEmail }
            oldState.erremail[index] = ''
            setErrorDataEmail(oldState)
        }
        else {
            console.log("EMPTY empty")
            let oldState = { ...errorDataEmail }
            oldState.erremail[index] = "Please enter a valid email ID"
            setErrorDataEmail(oldState)
        }
    }

    const handleFillPasswordAttr = (e, index) => {
        console.log("password password password password password")
        var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (state[index].password.match(paswd)) {
            console.log("not empty")
            let oldState = { ...errorDataPassword }
            oldState.errpassword[index] = ''
            setErrorDataPassword(oldState)
        }
        else {
            console.log("EMPTY empty")
            let oldState = { ...errorDataPassword }
            oldState.errpassword[index] = "Please enter a valid email ID"
            console.log("password----> ", oldState)
            setErrorDataPassword(oldState)
        }
    }

    console.log("state----> ", state)

    return (
        <div style={{ marginLeft: '20%', marginBottom: '10%' }}>
            {/* <form> */}
            <button onClick={addUserBlock}>Add</button>
            <div>
                {state.map((stt, index) => (
                    <div key={index}>
                        <p>---------</p>
                        <br />
                        <p>Name {index}:
                            <input type="text" name="name"
                                value={state[index] && state[index].name || ''}
                                onChange={e => handleOnChange(e, index)}
                                onBlur={e => handleFillNameAttr(e, index)}
                            />
                            {
                                (errorDataName && errorDataName.errname[index]) && (
                                    <div style={{ color: 'red' }}>
                                        {errorDataName && errorDataName.errname[index]}
                                    </div>
                                )
                            }
                        </p>
                        <p>Age {index}:
                            <input type="text" name="age"
                                value={state[index] && state[index].age || ''}
                                onChange={e => handleOnChange(e, index)}
                                onBlur={e => handleFillAgeAttr(e, index)}
                            />
                            {
                                // (errorDataAge && errorDataAge.errage[index]) && 
                                (
                                    <div style={{ color: 'red' }}>
                                        {errorDataAge && errorDataAge.errage[index]}
                                    </div>
                                )
                            }
                        </p>
                        <p>Email {index}:
                            <input type="email" name="email"
                                value={state[index] && state[index].email || ''}
                                onChange={e => handleOnChange(e, index)}
                                onBlur={e => handleFillEmailAttr(e, index)}
                            />
                            {
                                (errorDataEmail && errorDataEmail.erremail[index]) && (
                                    <div style={{ color: 'purple' }}>
                                        {errorDataEmail && errorDataEmail.erremail[index]}
                                    </div>
                                )
                            }
                        </p>
                        <p><label>
                            Gender:
                            <input type="radio" name="gender" value="male" onChange={e => handleOnChange(e, index)} />Male
                            <input type="radio" name="gender" value="female" onChange={e => handleOnChange(e, index)} />Female
                        </label></p>
                        <p><label>
                            Qualification :
                            <input type="checkbox" name="qualification" value="school" onChange={e => handleOnChange(e, index)} /> School
                            <input type="checkbox" name="qualification" value="bachelor" onChange={e => handleOnChange(e, index)} /> Bachelor
                            <input type="checkbox" name="qualification" value="masters" onChange={e => handleOnChange(e, index)} /> Masters
                            </label></p>
                        <p><label>
                            Password :
                            <input type="password" name="password"
                                value={state[index].password}
                                onChange={e => handleOnChange(e, index)}
                                onBlur={e => handleFillPasswordAttr(e, index)}
                            />
                            {
                                (errorDataPassword && errorDataPassword.errpassword[index]) && 
                                (
                                    <div style={{ color: 'red'}}>
                                        {errorDataPassword && errorDataPassword.errpassword[index]}
                                    </div>
                                )
                            }
                        </label></p>
                        <p><label>
                            Confirm Password :
                                <input type="password" name="cPassword" value={state[index].cPassword} onChange={e => handleOnChange(e, index)} />
                        </label></p>
                        {/* -------------------- */}
                        <button onClick={e => addPhoneBlock(e, index)}>Add Phone</button>
                        {stt.phone.map((st, i) => (
                            (
                                <div key={i}>
                                    <p>
                                        Phone Number {index}{i} :
                                    <input type="number" name="phone" value={stt.phone[i]} onChange={e => handleOnChangeNumber(e, index, i)} />
                                    </p>
                                </div>
                            )
                        ))}
                    </div>
                ))}
            </div>
            {/* </form> */}
        </div>
    )
}

// value={state[index].name}
// value={state[index] && state[index].name}