import { createPortal } from "react-dom";

export const PageLoader = () => {
  return createPortal(
    <div className="fixed top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-white">
      <div className="relative inline-flex">
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
    </div>,
    document.getElementById("loading") as Element
  );
};
