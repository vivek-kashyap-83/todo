import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import Input from "../common/Input";
import Button from "../common/Button";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;