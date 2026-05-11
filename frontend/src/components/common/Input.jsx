const Input = (props) => {
  return (
    <input
      style={{
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        marginRight: "10px",
      }}
      {...props}
    />
  );
};

export default Input;