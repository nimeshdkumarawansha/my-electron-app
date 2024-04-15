import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <div>
      <p>This is our layout</p>
      <li>
        <a href="/work">Work</a>
      </li>
      <li>
        <a href="/">Home</a>
      </li>
      <Outlet />
    </div>
  );
};
