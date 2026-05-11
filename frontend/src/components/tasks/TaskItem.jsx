import { useTasks } from "../../context/TaskContext";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "" }}>
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  );
};

export default TaskItem;