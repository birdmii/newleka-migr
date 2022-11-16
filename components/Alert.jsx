const Alert = ({ alertContent }) => {
  return (
    <div className="max-lg:hidden text-sm bg-white text-gray-400 py-3 px-4 rounded-lg shadow-shadow-1">
      <span>{alertContent.content}</span>
    </div>
  );
};

export default Alert;
