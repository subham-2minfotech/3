import React from 'react'
import { WithLogin, WithOutLogin } from '../common/Data'


function Header() {
    const x = localStorage.getItem("login");
    if (x === 'true') {
        return (
            <div className="page-header">
                {  WithLogin.map((item, index) => (
                    <a key={index} href={item.Path} style={{ padding: '25px' }}>
                        {item.title}
                    </a>
                ))
                }
        {console.log("with Login")}
            </div>
        )
    }
    else {
        return (
            <div className="page-header">
                {  WithOutLogin.map((item, index) => (
                    <a key={index} href={item.Path} style={{ padding: '25px' }}>
                        {item.title}
                    </a>
                ))
                }
                {console.log("with OUT Login")}
            </div>
        )
    }

}
export default Header
