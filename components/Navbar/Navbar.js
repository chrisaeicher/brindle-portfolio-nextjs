import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const classes = styles.Navbar;
  return (
    <nav className={classes}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <div className="dropdown">
        <Link href="/scenic/design">
          <a>Design</a>
        </Link>
        <Link href="/scenic/painting">
          <a>Painting</a>
        </Link>
      </div>
      <div className="dropdown">
        <Link href="/art/personal">
          <a>Personal</a>
        </Link>
        <Link href="/art/commissions">
          <a>Commissions</a>
        </Link>
      </div>
    </nav>
  );
}
