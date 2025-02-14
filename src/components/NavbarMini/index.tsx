import * as React from 'react';
import { RootState } from '@Store/store';
import { useSelector, useDispatch } from 'react-redux';
import { setSideMenu } from '@Store/slices/uiSlice';
import SideMenu from '@Components/SideMenu';

const NavbarMini = () => {
  const [delay, setDelay] = React.useState("closed");
  const open = useSelector((state: RootState) => state.ui.sideMenu);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (open) setDelay("open");
  }, [open]);

  const onClose = () => {
    setDelay("closed");
    setTimeout(() => {
      dispatch(setSideMenu(false));
    }, 500);
  };

  return (
    <SideMenu
      open={open}
      openClass={delay}
      onClose={onClose}
      title=""
    >
      <ul className="flex flex-col items-center gap-8 pr-8 flex-1 w-full">
        <li className="">
          <a href="#home" onClick={onClose}>Inicio</a>
        </li>
        <li className="">
          <a href="#about" onClick={onClose}>Sobre mi</a>
        </li>
        <li className="">
          <a href="#projects" onClick={onClose}>Proyectos</a>
        </li>
        <li className="">
          <a href="#skills" onClick={onClose}>Habilidades</a>
        </li>
      </ul>
    </SideMenu>
  );
};

export default NavbarMini;
