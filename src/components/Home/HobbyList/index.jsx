import React from "react";
import PropTypes from "prop-types";
import "./HomePage.css";

HobbyList.propTypes = {
	hobbyList: PropTypes.array,
	activeId: PropTypes.string,
	handleHobbyClick: PropTypes.func,
};
HobbyList.defaultProps = {
	hobbyList: [],
	activeId: null,
	handleHobbyClick: null,
};

function HobbyList(props) {
	const { hobbyList, activeId, handleHobbyClick } = props;
	console.log("hobby list render: ", hobbyList);
	console.log("hobby list render: ", activeId);
	console.log("hobby list render: ", handleHobbyClick);

	// Tránh trường hợp function NULL
	const handleClick = (hobby) => {
		if (handleHobbyClick) {
			handleHobbyClick(hobby);
		}
	};
	return (
		<ul>
			{hobbyList.map((hobby) => (
				<li key={hobby.id} onClick={() => handleClick(hobby)} className={hobby.id === activeId ? "active" : ""}>
					{hobby.title}
				</li>
			))}
		</ul>
	);
}

export default HobbyList;
