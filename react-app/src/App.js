import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import BlockedRoute from "./components/auth/BlockedRoute";

import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import DashBoard from "./components/DashBoard";
import CategoryDeckSearch from "./components/CategoryDeckSearch";
import DeckPage from "./components/DeckPage"
import StudyPage from "./components/StudyPage"
// import QuestionCard from "./components/QuestionCard/QuestionCard";
// import QuizStudy from "./components/QuizStudy/QuizStudy";
import AddCards from "./components/AddCards"
import "./index.css";

function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(authenticate());
			setLoaded(true);
		})();
	}, [dispatch]);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route path='/' exact={true}>
					<LandingPage />
				</Route>
				<Route path='/search'>
					<CategoryDeckSearch />
				</Route>
				<Route path='/decks/:id'>
					<DeckPage />
				</Route>
				<Route path='/study/:id'>
					<StudyPage />
				</Route>
				<ProtectedRoute path='/dashboard'>
					<DashBoard />
				</ProtectedRoute>
				<ProtectedRoute path='/add-cards/:id' >
					<AddCards />
				</ProtectedRoute>
				<BlockedRoute path='/'/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
