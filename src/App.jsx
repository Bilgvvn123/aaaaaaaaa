import { useState } from "react";

import "./App.css";

function App() {
	const [count, setCount] = useState(1);
	const [utasniiDugaar, setUtasniidugaar] = useState(false);
	// let x = false;
	function uurcildug() {
		setUtasniidugaar(!utasniiDugaar);
		// x = true;
		// console.log("============>", x);
	}

	return (
		<div>
			<button
				onClick={function () {
					uurcildug();
				}}
			>
				click
			</button>

			{utasniiDugaar === true ? (
				<h1 style={{ fontSize: "100px" }}>{count}</h1>
			) : (
				"aaaaa"
			)}
		</div>
	);
}

export default App;
