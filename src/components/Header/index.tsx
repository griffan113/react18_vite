import React, { useState } from "react";
import { List, X } from "phosphor-react";
import { Link, useLocation } from "react-router-dom";

import viteLogo from "../../assets/vite.svg";

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { pathname } = useLocation();

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className={`bg-bg`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileNavOpen((prev) => !prev)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              {isMobileNavOpen ? <X size={32} /> : <List size={32} />}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/">
              <div className="flex flex-shrink-0 items-center">
                <span className="sr-only">Go to home</span>
                <img className="h-8 w-auto" src={viteLogo} alt="Your Company" />
              </div>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={
                      pathname.includes(route.path)
                        ? "bg-primary text-white px-3 py-2 rounded-md text-sm font-bold"
                        : "text-gray-500 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                    aria-current="page"
                  >
                    {route.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMobileNavOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={
                  pathname.includes(route.path)
                    ? "bg-primary text-white block px-3 py-2 rounded-md text-base font-bold"
                    : "text-gray-500 hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
                aria-current="page"
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
