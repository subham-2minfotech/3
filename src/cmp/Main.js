import React from 'react'
import About from './mainpage/About'
import Profile from './mainpage/Profile'
import Question from './mainpage/Question'
import '../all.css'

function Main() {
    return (
        <div className={'link'}>
            <About /> 
            <Profile />
            <Question />
            {/* <Logout /> */}
        </div>

        
    )
}
export default Main