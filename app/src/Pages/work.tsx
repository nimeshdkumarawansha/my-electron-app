import React from 'react';
export const Work: React.FC = () => {
  const electron = (window as any).electron;
  return (
    <div>
      <pre>
        This is our work page The home director is @ {electron.homeDir()}
        The OS arch is {electron.arch()}
        The OS version is {electron.osVersion()}
      </pre>
    </div>
  );
};
