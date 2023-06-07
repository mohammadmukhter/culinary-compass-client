const PrimaryButton = ({ children, clickHandler }) => {
  return (
    <button
      onClick={clickHandler && clickHandler}
      className=" border-b-4 border-gray-500 px-4 py-1 bg-[#8E806A] text-white hover:bg-[#575151] hover:text-white hover:border-[#8E806A] uppercase font-medium rounded"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
