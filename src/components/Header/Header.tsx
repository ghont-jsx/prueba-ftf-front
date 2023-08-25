import React from "react";
import logogithub from '../../assets/logogithub.png'

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Commit History</h1>
      <div className="logo">
        <img
          className="h-8 w-auto"
          src={logogithub}
          alt="logo"
        />
      </div>
    </header>
  );
};

export default Header;
