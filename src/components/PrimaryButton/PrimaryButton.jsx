const PrimaryButton = ({ children, clickHandler }) => {
  return (
    <button
      onClick={clickHandler && clickHandler}
      className=" border-b-4 border-gray-500 px-4 py-1 bg-[#575151] text-white hover:bg-[#3a3636] hover:text-white hover:border-[#1F8A70] uppercase font-medium rounded"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
