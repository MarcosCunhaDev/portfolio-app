import Link from "next/link";
import React from "react";

function NavLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:tex-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}

export default NavLink;
