import Task from "./Task";

function CompletedTasks({ completedTasks, handleCheckboxToggle }) {
	return (
		<>
			{completedTasks.map((task, i) => (
				<div key={i}>
					<Task task={task} handleCheckboxToggle={handleCheckboxToggle} />
				</div>
			))}
		</>
	);
}

export default CompletedTasks;
