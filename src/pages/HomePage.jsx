import React from "react";
// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import HobbyList from "./../components/Home/HobbyList";
import casual from "casual-browserify";
// import store from "../store";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
// HomePage.propTypes = {};

function HomePage(props) {
	const hobbyList = useSelector((state) => state.hobby.list);
	const activeId = useSelector((state) => state.hobby.activeId);
	const dispatch = useDispatch();

	// console.log("hobbyList: ", hobbyList);
	// console.log("activeId: ", activeId);

	const handleAddHobbyClick = () => {
		// Random a hobby object: id + title
		const randomHobby = {
			id: casual.uuid,
			title: `Hobby: ${casual.first_name} ${casual.building_number}`,
		};
		// console.log("random hobby: ", randomHobby);

		// Dispatch action to add a new hobby to redux store
		const action = addNewHobby(randomHobby);
		dispatch(action);
	};

	const handleHobbyClick = (hobby) => {
		const action = setActiveHobby(hobby);
		dispatch(action);
	};
	return (
		<div className="home-page">
			<h1>REDUX HOOKS - Home Page</h1>
			<button onClick={handleAddHobbyClick}>Random hobby</button>
			<HobbyList hobbyList={hobbyList} activeId={activeId} handleHobbyClick={handleHobbyClick} />
		</div>
	);
}

export default HomePage;
