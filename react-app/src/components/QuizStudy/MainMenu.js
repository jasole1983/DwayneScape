import React from "react";
import "./QuizStudy.css";
import ReactDOM from "react-dom";
import {useState, useEffect, useContext} from "react";
import {QuizContext} from "../QuizHelpers/Contexts";

const MainMenu = () => {
	const {quizState, setQuizState} = useContext(QuizContext);
	return (
		<div className='Menu'>
			<button
				className='Menu-Button'
				onClick={() => {
					setQuizState("quiz");
				}}>
				Start Quiz
			</button>
		</div>
	);
};

export default MainMenu;
