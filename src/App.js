import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './cmp/configuration/AppRouter.js'
import Footer from './cmp/Footer.js'
import Header from './cmp/Header'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
            {/* <Footer /> */}
        </BrowserRouter>
    )
}

export default App

// style={{ position: relative; min- height: 100%; top: 0px;}}