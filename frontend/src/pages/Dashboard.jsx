import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import { TaskProvider } from "../context/TaskContext";

const Dashboard = () => {
  return (
    <TaskProvider>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Header />
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
};

export default Dashboard;