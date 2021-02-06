import React, { Component } from 'react'
import "./quizbee/assets/style.css"
import quizService from './quizbee/quizService'
import QuestionBox from './quizbee/components/QuestionBox'
import Result from './quizbee/components/Result'

import { Redirect } from 'react-router-dom'

class QuizBee extends Component {
    state = {
        questionBank: [],
        score: 0,
        responses: 0
    }
    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            })
        })
    }
    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            })
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    }
    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        })
    }
    componentDidMount() {
        this.getQuestions();
    }
    render() {
        const x = localStorage.getItem("login");
        if (x === 'true') {
            return (
                <div className="container">
                    <div className="title">
                        QuizBee
                    </div>
                    {this.state.questionBank.length > 0 &&
                        this.state.responses < 5 &&
                        this.state.questionBank.map(
                            ({ question, answers, correct, questionId }) => (
                                < QuestionBox
                                    question={question}
                                    options={answers}
                                    key={questionId}
                                    selected={answer => this.computeAnswer(answer, correct)}
                                />
                            )
                        )}

                    {this.state.responses === 5 ? (
                        <Result score={this.state.score} playAgain={this.playAgain} />
                    ) : null
                    }
                </div>
            );
        }
        else {
            return <Redirect to='/login' />
        }
    }
}

export default QuizBee