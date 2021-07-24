import React from "react";
import "./QuestionCard.css";
import ReactDOM from "react-dom";
import {useState, useEffect, useContext} from "react";
import {FlashCardContext} from "../FlashCardHelpers/FlashCardContext"

const FinalScreen = () => {
	const {setCardCount, setGameState, progressBar, setProgressBar} = useContext(FlashCardContext)

	const restartDeck = () => {
		setCardCount(0);
		setGameState ("startDeck");
		setProgressBar(0);
	};

	return (
		<div className='FinalScreen'>
			<h1> Well Done Chump. </h1>
			<button onClick={restartDeck}> Give It Another Go. </button>
		</div>
	);
};

export default FinalScreen;