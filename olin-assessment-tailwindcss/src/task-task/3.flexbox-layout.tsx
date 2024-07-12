const FlexboxLayout = () => {
  return (
    <div className="flex justify-around items-center h-64 bg-gray-100">
      <div className="flex justify-center items-center w-24 h-24 bg-blue-500 text-white">
        Item 1
      </div>
      <div className="flex justify-center items-center w-24 h-24 bg-green-500 text-white">
        Item 2
      </div>
      <div className="flex justify-center items-center w-24 h-24 bg-red-500 text-white">
        Item 3
      </div>
    </div>
  );
};

export default FlexboxLayout;
