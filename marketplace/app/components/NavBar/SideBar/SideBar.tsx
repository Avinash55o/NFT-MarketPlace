import React from "react";

interface CloseableComponentProps {
  close: () => void;
}

const SideBar: React.FC<CloseableComponentProps> = ({ close }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex">
      <div className="bg-white w-64 h-full shadow-lg p-4">
        <button onClick={close} className="text-red-500">Close</button>
        <p>Sidebar Content</p>
      </div>
    </div>
  );
};

export default SideBar;
