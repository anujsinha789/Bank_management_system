/* eslint-disable arrow-body-style */
import "./App.css";
import React from "react";
import { useDispatch } from "react-redux";
import Main from "./routes";
import { resetData } from "./redux/actions/authentication";

function App() {
	const dispatch = useDispatch();
	React.useEffect(() => {
		return () => {
			dispatch(resetData());
		};
	}, []);
	return (
		<div className="App">
			<Main />
		</div>
	);
}

export default App;
