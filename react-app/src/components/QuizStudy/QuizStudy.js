import React from "react";
import ReactDOM from "react-dom";
import {useState, useEffect, useContext} from "react";
import MainMenu from "./MainMenu";
import EndScreen from "./EndScreen";
import Quiz from "./Quiz";
import {QuizContext} from "../QuizHelpers/Contexts";
import "./QuizStudy.css";

const QuizStudy = () => {
	const [quizState, setQuizState] = useState("menu");
	const [score, setScore] = useState(0); // set global state of store

	return (
		<div className='Quiz'>
			<h1>Quiz App</h1>
			<QuizContext.Provider value={{quizState, setQuizState, score, setScore}}>
				{quizState === "menu" && <MainMenu />}
				{quizState === "quiz" && <Quiz />}
				{quizState === "endScreen" && <EndScreen />}
			</QuizContext.Provider>
		</div>
	);
};

export default QuizStudy;
