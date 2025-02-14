import * as React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { RootState } from '@Store/store';
import { useSelector } from 'react-redux';
import "./styles.css";

interface SideMenuProps {
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
  open?: boolean;
  openClass?: string;
}

const SideMenu = (props: SideMenuProps) => {
  const {
    title,
    onClose,
    children,
    open,
    openClass
  } = props;
  const theme = useSelector((state: RootState) => state.ui.theme);

  if (!open) return null;
  return (
    <aside
      className={`w-full md:w-1/3 flex flex-col items-center fixed bg-white shadow-lg right-0 z-50 text-zinc-900 top-0 mt-16 select-none ${openClass} ${theme}`}
    >
      <div className="flex justify-between items-center w-full p-4 select-none">
        <h2 className="font-medium text-xl">{title}</h2>
        <CloseOutlined onClick={onClose} />
      </div>
      {children}
    </aside>
  );
};

SideMenu.defaultProps = {
  title: "Menu",
  open: false,
  openClass: "closed"
};

export default SideMenu;
