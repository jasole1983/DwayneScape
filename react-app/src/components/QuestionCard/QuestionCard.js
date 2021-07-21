import React from "react";
import "./QuestionCard.css";
import ReactDOM from "react-dom";
import ReactCardFlip from "react-card-flip";
import { useState, useEffect } from "react";

const QuestionCard = () => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setIsFlipped(!isFlipped);
	};
	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
			<div className='front'>
				This is the front of the card.
				<div>
					<button className='btn' onClick={handleClick}>
						Click to flip
					</button>
				</div>
			</div>

			<div className='back'>
				This is the back of the card.
				<div>
					<button className='btn' onClick={handleClick}>
						Click to flip
					</button>
				</div>
			</div>
		</ReactCardFlip>
	);
};

export default QuestionCard;
