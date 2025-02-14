import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Store/store';

interface LayoutProps {
  children: React.ReactNode;
  id?: string;
}

const Layout = ({ children, id }: LayoutProps) => {
  const theme = useSelector((state: RootState) => state.ui.theme);
  return (
    <div id={id} className={`flex flex-col md:flex-row items-center h-fit md:h-lvh w-full justify-center p-10 mt-16 relative ${theme}`}>
      {children}
    </div>
  );
};

export default Layout;
