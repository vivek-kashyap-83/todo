const Sidebar = () => {
  return (
    <div
      style={{
        width: "220px",
        background: "#f9fafb",
        padding: "20px",
        height: "100vh",
      }}
    >
      <h2>MERN Todo</h2>

      <ul>
        <li>All Tasks</li>
        <li>Today</li>
        <li>Important</li>
        <li>Completed</li>
      </ul>

      <h4>Projects</h4>
      <ul>
        <li>Personal</li>
        <li>Work</li>
        <li>Shopping</li>
      </ul>
    </div>
  );
};

export default Sidebar;