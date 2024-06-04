import React from "react";
import NavLink from "./NavLink";

interface linkI {
  title: string;
  path: string;
}

const MenuOverlay = ({ links }: { links: linkI[] }) => {
  return (
    <ul className="flex flex-col py-4 items-center ">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;
