import React from "react";
import "./QuizStudy.css";
import ReactDOM from "react-dom";
import {useState, useEffect, useContext} from "react";
import {QuizContext} from "../QuizHelpers/Contexts";
import {Questions} from "../QuizHelpers/QuestionBank";

const EndScreen = () => {
	// const [quizState, setQuizState] = useState("menu");
	const {score, setScore, setGameState} = useContext(QuizContext);

	const restartQuiz = () => {
		setScore(0);
		setGameState("menu");
	};
	return (
		<div className='EndScreen'>
			{" "}
			<h1>Quiz Finished</h1>
			<h3>
				{" "}
				{score} / {Questions.length}{" "}
			</h3>
			<button onClick={restartQuiz}> Restart Quiz </button>
		</div>
	);
};

export default EndScreen;
