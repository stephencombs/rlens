import { useState } from 'react';

const ButtonInput = ({ icon, type, id, placeholder, ...props }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    console.log(input);
  };

  const handleInput = ({ target: { value } }) => {
    setInput(value);
  };

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="relative rounded-md overflow-hidden">
      <button
        className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 absolute left-0 flex items-center justify-center min-h-full w-8"
        onClick={handleSubmit}
      >
        <span className="material-icons">{icon}</span>
      </button>
      <input
        type={type}
        id={id}
        className="border-gray-200 focus:ring-gray-400 text-sm rounded-md pl-10 pr-8"
        placeholder={placeholder}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ButtonInput;
