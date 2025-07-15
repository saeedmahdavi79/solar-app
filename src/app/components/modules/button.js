const ButtonApp = ({ onClick, text }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="border-none w-full h-[40px] items-center bg-blue-500 text-white rounded-lg flex justify-center text-center"
      >
        {text}
      </button>
    </>
  );
};

export default ButtonApp;
