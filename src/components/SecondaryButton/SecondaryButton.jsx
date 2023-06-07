const SecondaryButton = ({ children, clickHandler }) => {
  return (
    <button
      onClick={clickHandler && clickHandler}
      className=" border-[1px] border-white px-4 py-1 bg-[#0B5269] text-white hover:bg-yellow-900 hover:text-white hover:border-[#e2d0b2] uppercase font-medium rounded shadow-lg"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
