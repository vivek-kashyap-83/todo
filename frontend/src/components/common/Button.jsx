const Button = ({ children, ...props }) => {
  return (
    <button
      style={{
        padding: "8px 16px",
        background: "#4f46e5",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;