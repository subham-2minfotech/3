import React, { useState, useEffect } from "react";
// import axios from 'axios';

export const Training = () => {

    const [state, setState] = React.useState({
        "name": "Hello",
        "email": "",
        address: {
            shippingAddress: {
                "firstLine": "",
                "secLine": "",
            },
            "billingAddress": "",
        },
        "phone": [],
    });

    // useEffect(() => {
    //     loadData();
    //     findById();
    // }, [])

    // const loadData = () => { 
    //     axios.get('http://localhost:1337/teams')
    //         .then(function (response) {
    //             // handle success
    //             console.log("response =======> ", response.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .then(function () {
    //             // always executed
    //         });
    // }

    // const findById = ()=>{
    //     axios.get('http://localhost:1337/teams/601530f9ec956586f89f7840')
    //         .then(function (response) {
    //             // handle success
    //             console.log("findbyid success =======> ", response.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log("findbyid error =======> ", error);

    //         })
    //         .then(function () {
    //             // always executed
    //         });
    // }


    const [phoneArr, setPhoneArr] = React.useState([])

    const handleChange = (event) => {
        const value = event.target.value;
        const filed_name = event.target.name;
        let oldState = Object.assign({}, state);
        oldState[filed_name] = value;
        setState(oldState);
    }

    const handlePhoneNum = (event) => {
        const value = event.target.value;
        setPhoneArr(value);
    }
    console.log(phoneArr);

    const handleChangeAddress = (event) => {
        const value = event.target.value;
        const fld_name = event.target.name;
        let oldState = Object.assign({}, (state));
        oldState.address.shippingAddress[fld_name] = value;
        setState(oldState);
        console.log(state);
    }

    const handlePhone = (event) => {
        console.log(event);
        const value = phoneArr;
        // console.log(event);
        const fld_name = "phone";
        let oldState = Object.assign({}, (state));   // ((Object.assign({}, (state)))["phone"]).length
        let x = oldState["phone"];
        // console.log("x...... = " + x);
        x.push(value);
        oldState[fld_name] = x;
        console.log("length of X : " + ((Object.assign({}, (state)))["phone"]).length)
    }

    const handleDelete = (event) => {
        let value = event.target.value;
        console.log(value)
        let oldState = Object.assign({}, (state));
        let x = oldState["phone"];
        console.log(x)
        let arr = x
        arr = arr.filter(item => item !== value)
        oldState["phone"] = arr
        setState(oldState);
        console.log(arr)
    }

    const handleUpdate = (event) => {
        let item = event.target.value;
        let replaceItem = event.target.replacevalue;
        console.log(item,  replaceItem)
        let oldState = Object.assign({}, (state));
        let x = oldState["phone"];
        console.log(x)        
    }

    const handleChangeES6 = (event) => {
        console.log(event)
        const { name, value } = event.target;
        console.log(name, value)
        setState({ ...state, [name]: value });
    }

    return <Field {...state} onChange={handleChangeES6} onAddCh={handleChangeAddress} onAddPhone={handlePhone} 
        onAddPhoneNum={handlePhoneNum} 
        onDelete={handleDelete} 
    />
}

const Field = props => {
    const { onChange } = props;

    return (
        <div>
            {JSON.stringify(props, null, 4)}
            <p>Name: <input type="text" name="name" value={props.name} onChange={onChange} /> - {props.name}</p>
            <p>Email: <input type="email" name="email" value={props.email} onChange={onChange} /> - {props.email}</p>
            <p>Address Line Fisrt: <input type="text" name="firstLine" value={props.address.shippingAddress.firstLine} onChange={props.onAddCh} /> - {props.address.shippingAddress.firstLine}</p>
            <p>Address Line Second: <input type="text" name="secLine" value={props.address.shippingAddress.secLine} onChange={props.onAddCh} /> - {props.address.shippingAddress.secLine}</p>
            <p>Phone: <input type="text" name="phoneArr" value={props.phoneArr} 
                onChange={props.onAddPhoneNum} 
            /> 
                - <button onClick={props.onAddPhone}>Add More</button> - {props.phone}
            </p>
            
            <text>{props.phone.length}</text>
            <div>
                {
                    props.phone.map((phoneA, index) => (
                        <div>{phoneA} .... {index}  <button value={phoneA} onClick={props.onDelete}>delete</button></div>
                    ))
                }
            </div>
        </div>
    )
}

// onBlur={(value) => onAddPhone(value)}