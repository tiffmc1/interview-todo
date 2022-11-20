import Task from "./Task";

function TaskItem({ tasks, handleCheckboxToggle }) {
	return (
		<>
			<div>Task (0)</div>
			<div>
				{tasks.map((task, i) => (
					<div key={i}>
						<Task task={task} handleCheckboxToggle={handleCheckboxToggle} />
					</div>
				))}
			</div>
		</>
	);
}

export default TaskItem;
