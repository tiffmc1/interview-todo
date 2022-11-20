import { useState, useEffect, useRef } from "react";
import CompletedTasks from "./Component/CompletedTasks";
import UncompletedTasks from "./Component/UncompletedTasks";
import "./App.css";

const LOCAL_STORAGE_KEY = "LOCAL_STORAGE_KEY";

function App() {
	const [tasks, setTasks] = useState([]);
	const [uncompletedTasks, setUncompletedTasks] = useState([]);
	const [completedTasks, setCompletedTasks] = useState([]);
	const inputEl = useRef();
	//what kind of ds you will use to hold the application's data

	// let tempData = [
	// 	{
	// 		taskName: "task0",
	// 		isCompleted: false,
	// 		id: 0,
	// 	},
	// 	{
	// 		taskName: "task1",
	// 		isCompleted: true,
	// 		id: 1,
	// 	},
	// ];

	useEffect(() => {
		const getLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

		setTasks((prevTasks) => [...prevTasks, ...getLocalStorage]);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
	}, [tasks]);

	useEffect(() => {
		let completed = tasks.filter((task) => task.isComplete === true);
		let uncompleted = tasks.filter((task) => !task.isComplete);

		setCompletedTasks(completed);
		setUncompletedTasks(uncompleted);
	}, [tasks]);

	const handleAddTask = () => {
		let inputName = inputEl.current.value;
		if (inputName === "") return;

		setTasks((prevTasks) => [
			...prevTasks,
			{ name: inputName, isComplete: false },
		]);

		inputEl.current.value = null;
	};

	const handleCheckboxToggle = (taskName) => {
		const copiedTasks = [...tasks];

		let task = copiedTasks.find((task) => task.name === taskName);

		task.isComplete = !task.isComplete;

		setTasks(copiedTasks);
	};

	return (
		<>
			<div className="tl-container">
				<div className="tl-header">Task List</div>

				<div className="tl-wrapper">
					<div className="tl-tasks tl-grid-item">
						Uncompleted Tasks ({uncompletedTasks.length})
					</div>

					<div
						className={
							uncompletedTasks.length <= completedTasks.length &&
							completedTasks.length
								? "tl-tasks tl-grid-item tl-color-change"
								: "tl-tasks tl-grid-item"
						}
					>
						Completed Tasks ({completedTasks.length})
					</div>

					<div className="tl-tasks tl-grid-item">
						<UncompletedTasks
							uncompletedTasks={uncompletedTasks}
							handleCheckboxToggle={handleCheckboxToggle}
						/>
						<div className="tl-input-btn">
							<input type="text" ref={inputEl} />
							<button onClick={handleAddTask}>+</button>
						</div>
					</div>

					<div className="tl-tasks tl-grid-item">
						<CompletedTasks
							completedTasks={completedTasks}
							handleCheckboxToggle={handleCheckboxToggle}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
