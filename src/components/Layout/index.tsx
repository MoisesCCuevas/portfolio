import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const theme = useSelector((state: RootState) => state.ui.theme);
  return (
    <div className={`flex items-center h-screen w-screen justify-center select-none ${theme}`}>
      {children}
    </div>
  );
};

export default Layout;
