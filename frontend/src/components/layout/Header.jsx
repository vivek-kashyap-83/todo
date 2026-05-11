import { useAuth } from "../../context/AuthContext";
import Input from "../common/Input";

const Header = () => {
  const { logout } = useAuth();

  return (
    <div style={{ marginBottom: "20px" }}>
      <h1>All Tasks</h1>
      <Input placeholder="Search tasks..." />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Header;