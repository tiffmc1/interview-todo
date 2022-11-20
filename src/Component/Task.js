function Task({ task, handleCheckboxToggle }) {
	const toggle = () => {
		handleCheckboxToggle(task.name);
	};

	return (
		<>
			<input type="checkbox" checked={task.isComplete} onChange={toggle} />
			{task.name}
		</>
	);
}

export default Task;
