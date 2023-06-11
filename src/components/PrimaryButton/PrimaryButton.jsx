const PrimaryButton = ({ children, clickHandler }) => {
  return (
    <button
      onClick={clickHandler && clickHandler}
      className="w-full border-b-4 bg-orange-950 text-white px-3 py-[2px] rounded-md mx-auto font-bold  text-lg hover:bg-orange-800 border-gray-500 hover:text-white hover:border-[#1F8A70] uppercase"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
