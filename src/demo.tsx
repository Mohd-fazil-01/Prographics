import React from "react";

const Demo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">🚧</div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Service Currently Unavailable
        </h1>

        <p className="text-gray-500 max-w-md">
          We're sorry, this service is temporarily unavailable.
          Please try again later.
        </p>
      </div>
    </div>
  );
};

export default Demo;