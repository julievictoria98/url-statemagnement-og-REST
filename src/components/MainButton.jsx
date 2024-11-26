function MainButton({ mainBtnText }) {
  return (
    <button className=" rounded-md p-2 bg-black text-white hover:bg-blue-900 hover:border ">
      {mainBtnText}
    </button>
  );
}

export default MainButton;
