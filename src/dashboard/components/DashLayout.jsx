// Layout.js
import React from 'react';
import { DashFooter } from './DashFooter';
import { DashNavbar } from './DashNavbar';

export const DashLayout = ({ children }) => {
    return (
        <div>
            <DashNavbar />  
            {children}
            <DashFooter />
        </div>
  );
}
