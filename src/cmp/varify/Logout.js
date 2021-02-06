import React from 'react'

function Logout() {
    const handleClick = () => {
        localStorage.removeItem('login');
    };

    return (
        <div >
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Logout