import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Auth from './cmp/Auth.js'
// import Main from './cmp/Main.js'
import Header from './cmp/Header'


function App() {
    return (
        <BrowserRouter>
            <h1>Home</h1>
            {/* <Main /> */}
            <Auth />
            <Header />
        </BrowserRouter>
    )
}

export default App

// style={{ position: relative; min- height: 100%; top: 0px;}}