import Task from "./Task";

function UncompletedTasks({ uncompletedTasks, handleCheckboxToggle }) {
	return (
		<>
			{uncompletedTasks.map((task, i) => (
				<div key={i}>
					<Task task={task} handleCheckboxToggle={handleCheckboxToggle} />
				</div>
			))}
		</>
	);
}

export default UncompletedTasks;
