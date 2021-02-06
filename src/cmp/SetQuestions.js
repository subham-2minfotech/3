import React, { useState } from 'react'

function SetQuestions() {
    const i = 1;

    const [state, setState] = useState([
        {
            "question": "",
            "ans1": "",
            "ans2": "",
            "ans3": "",
            "ans4": "",
            "correctAns": "",
        }
    ])

    const addQuestion = e => {
        let oldState = [...state]
        oldState.push(
            {
                "question": "",
                "ans1": "",
                "ans2": "",
                "ans3": "",
                "ans4": "",
                "correctAns": "",
            }
        )
        setState(oldState)
    }

    const handleOnChange = (e, index) => {
        let oldState = [...state]
        oldState[index][e.target.name] = e.target.value
        setState(oldState)
        localStorage.setItem('Questions', JSON.stringify(state))
    }                                                      

    const deleteQuestion = (e, index) => {
        let oldState = [...state]
        console.log("oldState----->", oldState)
        // delete oldState[index]
        const valueToRemove = oldState[index]
        console.log("valueToRemove----> ", valueToRemove)
        const filteredItems = oldState.filter(item => item !== valueToRemove)
        console.log("filteredItems------>", filteredItems)
        setState(filteredItems)
    }

    console.log(state)

    return (
        <div style={{ marginLeft: '20%', marginRight: '10%' }}>
            <button onClick={addQuestion}>Add Question</button>
            <div>
                {state.map((stt, index) => (
                    <div key={index}>
                        <p>--------</p><br/>
                        <p>{index} Question :
                            <input type="text" name="question" value={state[index] && state[index].question || ''} onChange={e => handleOnChange(e, index)} />
                        </p>
                        <p> Answer 1 :
                            <input type="text" name="ans1" value={state[index] && state[index].ans1 || ''} onChange={e => handleOnChange(e, index)} />
                        </p>
                        <p>{index} Answer 2 :
                            <input type="text" name="ans2" value={state[index] && state[index].ans2 || ''} onChange={e => handleOnChange(e, index)} />
                        </p>
                        <p>{index} Answer 3 :
                            <input type="text" name="ans3" value={state[index] && state[index].ans3 || ''} onChange={e => handleOnChange(e, index)} />
                        </p>
                        <p>{index} Answer 4 :
                            <input type="text" name="ans4" value={state[index] && state[index].ans4 || ''} onChange={e => handleOnChange(e, index)} />
                        </p>
                        <p>{index} Correct Answer :
                            <input type="text" name="correctAns" value={state[index] && state[index].correctAns || ''} onChange={e => handleOnChange(e, index)} />
                        </p>
                        <button onClick={e => deleteQuestion(e, index)}>delete</button>
                        <br/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SetQuestions