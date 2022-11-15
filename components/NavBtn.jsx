const NavBtn = ({ content }) => {
  return (
    <>
      <button className="py-2 px-4 ml-[10px] bg-primary-450 active:bg-primary-500 cursor-pointer text-white rounded-full text-sm">{content}</button>
    </>
  );
};

export default NavBtn;
