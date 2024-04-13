import { FunctionComponent } from 'react';

const Voice: FunctionComponent = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="bg-[#613BE7] w-full h-96 sticky top-0 rounded-bl-[109px] rounded-br-[109px] flex justify-center items-end pb-4">
        {/* Content within the colored div can be added here if needed */}
      </div>
      <button className="z-20 relative -mt-20 bg-blue-500 text-white py-2 px-4 rounded shadow-md">
        Click me
      </button>
    </div>
  );
};

export default Voice;
