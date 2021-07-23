import React from "react";
import "./QuestionCard.css";
import ReactDOM from "react-dom";
import ReactCardFlip from "react-card-flip";
import { useState, useEffect, useContext } from "react";
import { FlashCardQuestions } from "../FlashCardHelpers/FlashCardQuestionBank";
import { FlashCardContext } from "../FlashCardHelpers/FlashCardContext";

const QuestionCard = () => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [currCard, setCurrCard] = useState(0);
	const { cardCount, setCardCount, setGameState } = useContext(FlashCardContext);
	// useState references index in array. Can we change this to question id?
	// So first question in question 0
	// const nextCard = () => {
	// 	if (Questions[currCard].answer === )
	// }
	const handleQuestionClick = (e) => {
		e.preventDefault();
		setIsFlipped(!isFlipped);
	};

	const handleAnswerClick = (e) => {
		e.preventDefault();
		setIsFlipped(!isFlipped);
		setCurrCard(currCard + 1);
		setCardCount(cardCount + 1);
	};

	const finishSession = () => {
		setGameState("finalScreen")
	};


	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection='vertical' cardZIndex="-100">
			<div className='FlashCards-Question'>
				<h1>{FlashCardQuestions[currCard].question}</h1>
				<div>
					<button className='btn' onClick={handleQuestionClick}>
						Click For Answer
					</button>
				</div>
			</div>

			<div className='FlashCards-Answer'>
				<span className="fade-in">
				<h1 className="FlashCards-Answer-Text">{FlashCardQuestions[currCard].answer}</h1>
				</span>
				<div>
				{currCard === FlashCardQuestions.length -1 ? (
					<button onClick={finishSession}> Session Finished</button>
				) : (
					<button className='btn-answer' onClick={handleAnswerClick}>
						Click For Question
					</button>
				)}
				</div>
			</div>
		</ReactCardFlip>
	);
};

export default QuestionCard;
