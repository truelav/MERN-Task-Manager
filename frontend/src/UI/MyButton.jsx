const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className="">
      {children}
    </button>
  );
};

export default MyButton;
