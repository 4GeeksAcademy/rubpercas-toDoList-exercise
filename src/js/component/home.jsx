import React from "react";
import ToDoList from "./ToDoList";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex align-items-center justify-content-center">
			<ToDoList />
		</div>
	);
};

export default Home;
