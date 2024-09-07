"use client";
import Link from "next/link";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="nav-title">Muhammad Ahsan</h1>
      <ul className="nav-links">
        <li>
          <Link href="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
