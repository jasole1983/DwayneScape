import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./index.styles.css";

const LogRegModal = () => {
	const [isLoginActive, setLoginActive] = useState(true);
	const current = isLoginActive ? "Sign Up" : "Log In";
	const [classList, setClassList] = useState("right");
	const click = () => {
		if (isLoginActive) {
			setClassList("left");
		} else {
			setClassList("right");
		}
		setLoginActive(!isLoginActive);
	};

	return (
		<div className='logreg'>
			<div className='log__login'>
				<div className='container'>
					{isLoginActive && <LoginForm />}
					{!isLoginActive && <SignUpForm />}
				</div>
				<RightSide current={current} click={click} classList={classList} />
			</div>
		</div>
	);
};

const RightSide = ({ click, current, classList }) => {
	return (
		<div className={`right-side ${classList}`} onClick={click}>
			<div className='inner-container'>
				<div className='text'>{current}</div>
			</div>
		</div>
	);
};

export default LogRegModal;
