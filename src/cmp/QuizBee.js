import React, { Component } from 'react'
import "./quizbee/assets/style.css"  

function QuizBee() {
    
    let q = JSON.parse(localStorage.getItem("Question"))
    
    return(
        <div>
                {q.map((stt, index) => (
                    <div key={index}>
                        <p>--------</p><br/>
                        <p>{index} Question :
                            
                        </p>
                        <p> Answer 1 :
                            
                        </p>
                        <p>{index} Answer 2 :
                            
                        </p>
                        <p>{index} Answer 3 :
                            
                        </p>
                        <p>{index} Answer 4 :
                            
                        </p>
                        <p>{index} Correct Answer :
                         
                        </p>
                        <br/>
                    </div>
                ))}
            </div>
    )
}

export default QuizBee