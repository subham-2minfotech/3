import React from 'react'
import { WithLogin, WithOutLogin } from '../common/Data'

function Header() {
    if (localStorage.getItem("login") === true) {
        return (<div>
            {WithLogin.map}
            <li>{WithLogin.title}</li>
        </div>
        )
    }
    else {
        return (
            <div>
                {WithOutLogin.map}
                <li> {WithOutLogin.title} </li>
            </div>
        )
    }
}

export default Header


