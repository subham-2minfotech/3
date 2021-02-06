import React from 'react'

var x = JSON.parse(localStorage.getItem("Users"));
const Result = ({ score, playAgain }) => {
    return (
        <div className="score-board">
            <div className="score"> {x.fName} scored {score}/5 </div>
            <p>if you want to play Again click button :</p>
            <button onClick={playAgain}>
                Play Again
        </button>
        </div>
    )
}

export default Result


