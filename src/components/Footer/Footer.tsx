import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 rounded shadow text-black p-4 text-center sm:flex sm:justify-between sm:items-center sm:px-8 absolute bottom-0 w-full  ">
      <p>© {new Date().getFullYear()} - All Rights Reserved</p>
      <a
        href="https://github.com/marcelopuentesh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-900"
      >
        my GitHub
      </a>
    </footer>
  );
};

export default Footer;
