import Task from "../models/Task.js";

// Get tasks
export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  res.json(tasks);
};

// Create task
export const createTask = async (req, res) => {
  const { title } = req.body;

  const task = await Task.create({
    user: req.user._id,
    title,
  });

  res.json(task);
};

// Toggle task
export const toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    task.completed = !task.completed;
    await task.save();
    res.json(task);
  }
};