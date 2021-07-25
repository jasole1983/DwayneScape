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
	const [currentLength, setCurrentLength] = useState(0);
	const [optionChosen, setOptionChosen] = useState("");
	const [finishBar, setFinishBar] = useState(0);
	const { cardCount, setCardCount, setGameState, progressBar, setProgressBar, sessionFinished, setSessionFinished } = useContext(FlashCardContext);
	// useState references index in array. Can we change this to question id?
	// So first question in question 0
	// const nextCard = () => {
	// 	if (Questions[currCard].answer === )
	// }
	const handleQuestionClick = (e) => {
		e.preventDefault();
		setIsFlipped(!isFlipped);
		setProgressBar(cardCount + 1)
		setFinishBar(cardCount + 1)
		setOptionChosen(FlashCardQuestions[currCard].answer)
		setSessionFinished("Session Finished")
		// setAnswerChosen(FlashCardQuestions[currCard].question)
	};

	const handleAnswerClick = (e) => {
		e.preventDefault();
		setIsFlipped(!isFlipped);
		// setCurrCard(currCard + 1);
		setCardCount(cardCount + 1);
		setCurrCard(cardCount + 1); 
	};

	// const awaitAnswer = (e) => {
	// 	setTimeout(setCurrCount(cardCount + 1), 3000)
	// }

	const finishSession = () => {
		setGameState("finalScreen");
	};


	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
			<div className='FlashCards-Question'>
				<div className="fcq">{FlashCardQuestions[currCard].question}</div>
				<div>
					<button onClick={handleQuestionClick}>
						Click For Answer
					</button>
				</div>
			</div>

			<div className='FlashCards-Answer'>
				<span className="fade-in">
				<h1 className="FlashCards-Answer-Text">{optionChosen}</h1>
				</span>
				<span>
				{finishBar === 10 ? (
					<button onClick={finishSession}>{sessionFinished}</button>
				) : (
					<button className='btn-answer' onClick={handleAnswerClick}>
						Click For Question
					</button>
				)}
				</span>
			</div>
		</ReactCardFlip>
	);
};

export default QuestionCard;
