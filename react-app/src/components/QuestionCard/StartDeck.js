import React from "react";
import "./QuestionCard.css";
import ReactDOM from "react-dom";
import {useState, useEffect, useContext} from "react";
import { FlashCardContext } from "../FlashCardHelpers/FlashCardContext";

const StartDeck = () => {
	const {gameState, setGameState } = useContext(FlashCardContext);
    return (
		<div className='StartDeck'>
            <button
                onClick={() => {
                    setGameState("questionCard")
                }}
                >
				Start
                </button>
		</div> 
	);
};

export default StartDeck;