import * as React from 'react';

interface RoundedButton {
  children: React.ReactNode;
  onClick?: () => void;
}

const RoundedButton = (props: RoundedButton) => {
  const {
    children,
    onClick
  } = props;
  return (
    <button
      className="bg-cyan-950 hover:bg-cyan-800 text-white font-bold p-3 rounded-full flex items-center justify-center shadow-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
