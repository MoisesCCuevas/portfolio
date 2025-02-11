import * as React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 flex justify-between items-center h-16 w-screen shadow-md">
      <div className="pl-8">Logo</div>
      <ul className="flex gap-8 pr-8">
        <li className="">
          <a href="#home">Inicio</a>
        </li>
        <li className="">
          <a href="#about">Sobre mi</a>
        </li>
        <li className="">
          <a href="#projects">Proyectos</a>
        </li>
        <li className="">
          <a href="#skills">Habilidades</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
