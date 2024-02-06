import React, { useState } from 'react'
import QuizData from '../Data/QuizData'
import QuizRes from './QuizRes';

function Quiz() {
    const[currQue,setCurrQue] = useState(0);
    const[ClickedOption,setClickedOption] = useState(0);
    const[score,setScore] = useState(0);
    const[showResult,setShowResult] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if(currQue < QuizData.length-1){
            setCurrQue(currQue+1);
            setClickedOption(0);
        }
        else{
            setShowResult(true);
        }
    }
    const updateScore = () =>{
        if(ClickedOption === QuizData[currQue].answer){
            setScore(score+1);
        }
    }
    const Reset =() =>{
        setShowResult(false);
        setCurrQue(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <>
        <div>
        <p className="heading-txt">
            Quiz App
            </p>
            <div className="container">
                {showResult ? (
                    <QuizRes score={score} totalScore = {QuizData.length} tryAgain = {Reset}/>
                ):(
                <>
                <div className="question">
                    <span id="queNum " >{currQue+1}.</span>
                    <span id="queText">{QuizData[currQue].question}</span>
                </div>
                <div className="option-container">
                    {QuizData[currQue].options.map((option,i) =>{
                        return (
                            <button 
                            //className="option-btn"
                            className={`option-btn ${
                                ClickedOption == i+1 ? "checked" : null
                            }`}
                            onClick={()=>setClickedOption(i+1)}
                            key = {i}
                            >
                                {option}
                            </button>
                        )
                    })}
                </div>
                <input type ="button" value = "Next" id = "next-button" onClick={changeQuestion}></input>

                </>)}
            </div>
        </div>
    </>
  )
}

export default Quiz
