const SecondaryButton = ({ children, clickHandler }) => {
  return (
    <button
      onClick={clickHandler && clickHandler}
      className=" border-[1px] border-white px-4 py-1 bg-[#1F8A70] text-white hover:bg-yellow-900 hover:text-white hover:border-[#e2d0b2] uppercase font-bold rounded shadow-2xl"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
