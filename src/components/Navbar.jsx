import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { styles } from '../styles';

import { navLinks } from '../constants';

import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuToogle, setMenuToogle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => {}}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Dex | Web Dev
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(link => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? `text-white` : `text-secondary`
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menuToogle ? close : menu}
            alt="menu"
            className="w-[28px] h-[29px] object-contain cursor-pointer"
            onClick={() => {
              setMenuToogle(!menuToogle);
            }}
          />
          <div
            className={`${
              !menuToogle ? 'hidden' : `flex`
            } p-6 black-gradient absolute top-20 right-0 rounded-xl mx-4 my-2`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(link => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? `text-white` : `text-secondary`
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => {
                      setMenuToogle(!menuToogle);
                      setActive(link.title);
                    }}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
