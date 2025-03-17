
import React from "react";

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <div className="absolute top-10 right-10 w-40 h-40 bg-purple rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-10 w-60 h-60 bg-pink-500 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-float"></div>
    </div>
  );
};

export default BackgroundEffects;
