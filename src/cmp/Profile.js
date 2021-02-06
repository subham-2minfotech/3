import React from 'react'

var x = JSON.parse(localStorage.getItem("Users"));

function Profile() {
    return(
        <div>
            <h2>Profile</h2>
            <p>Hi this is Profile Page.</p>
            <p>Name : {x.fName} {x.mName} {x.lName}</p>
            <p>Age : {x.age}</p>
            <p>Gender : {x.gender}</p>
            <p>Qualification : {x.qualification}</p>
            <p>Email : {x.email}</p>
        </div>
    )
}

export default Profile