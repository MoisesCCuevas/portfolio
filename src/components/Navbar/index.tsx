import * as React from 'react';
import "./styles.css";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@Store/store';
import { changeTheme, setSideMenu } from '@Store/slices/uiSlice';
import { MoonOutlined, SunOutlined, MenuOutlined } from "@ant-design/icons";
import RoundedButton from '@Components/RoundedButton';
import ProfilePicture from '@Components/ProfilePicture';

const Navbar = () => {
  const theme = useSelector((state: RootState) => state.ui.theme);
  const { photo, name, title } = useSelector((state: RootState) => state.data.data as any);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(changeTheme());
  };

  const handleOpenMenu = () => {
    dispatch(setSideMenu(true));
  }

  return (
    <nav className={`fixed top-0 flex justify-between text-white items-center h-16 w-screen shadow-md z-40 ${theme}`}>
      <div className="pl-8 flex items-center gap-5">
        <ProfilePicture
          url="assets/profile.jpg"
          className="size-11 flex items-center justify-center"
        />
        <p className="hidden md:flex flex-col">
          <span className="font-medium">{name}</span>
          <span className="font-light text-sm">{title}</span>
        </p>
      </div>
      <ul className="flex items-center gap-8 pr-8">
        <li className="hidden md:block">
          <a href="#home">Inicio</a>
        </li>
        <li className="hidden md:block">
          <a href="#about">Sobre mi</a>
        </li>
        <li className="hidden md:block">
          <a href="#projects">Proyectos</a>
        </li>
        <li className="hidden md:block">
          <a href="#skills">Habilidades</a>
        </li>
        <li className="">
          <RoundedButton onClick={handleThemeChange}>
            {theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
          </RoundedButton>
        </li>
        <li className="block md:hidden">
          <RoundedButton onClick={handleOpenMenu} >
            <MenuOutlined/>
          </RoundedButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
