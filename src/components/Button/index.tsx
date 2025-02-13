import * as React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick
  } = props;
  return (
    <button
      className="bg-cyan-950 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-md gap-3 flex items-center shadow-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
