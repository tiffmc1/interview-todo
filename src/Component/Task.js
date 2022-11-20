function Task({ task, handleCheckboxToggle }) {
	const toggle = () => {
		handleCheckboxToggle(task.name);
	};

	return (
		<div>
			<input type="checkbox" checked={task.isComplete} onChange={toggle} />
			{task.name}
		</div>
	);
}

export default Task;
