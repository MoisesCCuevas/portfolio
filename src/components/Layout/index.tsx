import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Store/store';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const theme = useSelector((state: RootState) => state.ui.theme);
  return (
    <div className={`flex flex-col items-center justify-center select-none ${theme}`}>
      {children}
    </div>
  );
};

export default Layout;
