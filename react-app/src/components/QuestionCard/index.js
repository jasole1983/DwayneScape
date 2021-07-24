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

    return (
        <div className="FlashCard__Container">
                <h1>Flash Cards</h1>
                <FlashCardContext.Provider value={{gameState, setGameState, 
                    cardCount, setCardCount, progressBar, setProgressBar}}>
                {gameState === "startDeck" && <StartDeck />}
                {gameState === "questionCard" && <QuestionCard />}
                {gameState === "finalScreen" && <FinalScreen />}
                </FlashCardContext.Provider>
                <h1>
                <CircleProgress percentage={Math.floor (progressBar / FlashCardQuestions.length * 100)} 
                strokeWidth={8} primaryColor={["blue","blue"]} secondaryColor="#f0f0f0" />
                </h1>
        </div>
    );
}

export default FlipCardStudy;