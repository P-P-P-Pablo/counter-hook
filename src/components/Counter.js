import React, { useState, useEffect } from "react";

function Counter() {
	// Déclare une nouvelle variable d'état, qu’on va appeler « count »
	// Déclare une fonction setCount qui permet de modifier la valeur de count
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);
	const manualSetting = (a) => setCount(Number(a.target.value));
	return (
		<div>
			<p>Le compteur est à : {count} </p>
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
			<form>
				<input placeholder={"Commencer à :"} onChange={manualSetting} />
			</form>
		</div>
	);
}

export default Counter;
