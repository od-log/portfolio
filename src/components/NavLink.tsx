import React from 'react';
import { navLinks } from '../constants';

const NavLink = () => {
  return (
    <div>
      {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={()=> setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
    </div>
  );
};

export default NavLink;
