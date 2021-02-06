import React from 'react'
import '../all.css'

var date = new Date();
var res = date.getFullYear();


function Footer() {
    return (
        <div className="page-footer">
            <footer>
                <p>copyright is not nessery. {res}</p>
            </footer>
        </div>
    )
}

export default Footer