import * as React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 flex justify-between items-center h-16 w-screen shadow-md">
      <div className="pl-8">Logo</div>
      <div className="pr-8">Home</div>
    </nav>
  );
};

export default Navbar;
