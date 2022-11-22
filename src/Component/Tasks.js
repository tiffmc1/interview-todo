import Task from "./Task";

function Tasks({ tasks, handleCheckboxToggle }) {
	return (
		<>
			{tasks.map((task, i) => (
				<div key={i}>
					<Task task={task} handleCheckboxToggle={handleCheckboxToggle} />
				</div>
			))}
		</>
	);
}

export default Tasks;
