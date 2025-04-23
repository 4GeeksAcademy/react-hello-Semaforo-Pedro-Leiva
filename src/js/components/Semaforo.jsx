import React from "react";
import { useState } from "react";

//create your first component
const Semaforo = () => {
	const [color, setColor] = useState(false);
	const changeColor = (value) => {
		setColor(value)
	}
	return (
		<>
			<div className="Trafic-Light">
				<button className={color == "Red" ? 'Red active-red' : 'Red'} onClick={() => changeColor("Red")}></button>
				<button className={color == "Yellow" ? 'Yellow active-yellow' : 'Yellow'} onClick={() => changeColor("Yellow")}></button>
				<button className={color == "Green" ? 'Green active-green' : 'Green'} onClick={() => changeColor("Green")}></button>
			</div>
		</>
	);
};

export default Semaforo;