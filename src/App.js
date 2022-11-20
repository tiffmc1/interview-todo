import { useState, useEffect, useRef } from "react";
import TaskItem from "./Component/TaskItem";
import CompletedTasks from "./Component/CompletedTasks";
import "./App.css";

const LOCAL_STORAGE_KEY = "LOCAL_STORAGE_KEY";

function App() {
	const [tasks, setTasks] = useState([]);
	const inputEl = useRef(null);
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

		if (getLocalStorage.length > 0) setTasks(getLocalStorage);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
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
			<div className="App">Task List</div>
			<TaskItem tasks={tasks} handleCheckboxToggle={handleCheckboxToggle} />
			<CompletedTasks />

			<input type="text" ref={inputEl} />
			<button onClick={handleAddTask}>Add Task</button>
		</>
	);
}

export default App;
