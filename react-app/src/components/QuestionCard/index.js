import React, {useState, useEffect, useContext} from "react";
import "./QuestionCard.css";
import StartDeck from "./StartDeck";
import FinalScreen from "./FinalScreen";
import QuestionCard from "./QuestionCard"
import {FlashCardContext} from "../FlashCardHelpers/FlashCardContext"
import {CircleProgress} from 'react-gradient-progress'
import StopWatch from "../StopWatch/StopWatch"
import { FlashCardQuestions } from "../FlashCardHelpers/FlashCardQuestionBank";


const FlipCardStudy = () => {
    const [gameState, setGameState] = useState("startDeck");
    const [cardCount, setCardCount] = useState(0)
    const [progressBar, setProgressBar] = useState(0)
    const [sessionFinished, setSessionFinished] = useState("");

    return (
        <div className="FlashCard__Container">
                {/* <div className="fctitle">The Rock Flash Cards</div> */}
                <FlashCardContext.Provider value={{gameState, setGameState, 
                    cardCount, setCardCount, progressBar, setProgressBar, sessionFinished, setSessionFinished}}>
                {gameState === "startDeck" && <StartDeck />}
                {gameState === "questionCard" && <QuestionCard />}
                {gameState === "finalScreen" && <FinalScreen />}
                </FlashCardContext.Provider>
                <h1 className='progress-bar'>
                <CircleProgress percentage={Math.floor (progressBar / FlashCardQuestions.length * 100)} 
                strokeWidth={8} primaryColor={["green","green"]} secondaryColor="light-grey" />
                </h1>
        </div>
    );
}

export default FlipCardStudy;