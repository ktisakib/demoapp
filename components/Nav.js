import Link from "next/link";
import React from "react";
import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className='flex flex-col  sm:flex-row justify-between max-w-screen-2xl m-auto'>
        {/* Left */}
        <li>
          <ul>logo</ul>
        </li>
        {/* Left */}
        {/* Middle */}
        <li>
          <ul className='flex flex-col sm:flex-row'>
            {[
              ["about", "About", "/about"],
              ["snippets", "Snippets", "/snippets"],
              ["witeups", "Write-ups", "/write-ups"],
              ["projects", "Projects", "/projects"],
              ["contact", "Contact", "/contact"],
            ].map(([key, title, url]) => (
              <li key={key}>
                <Link href={url}>
                  <a
                    className={`transition-all duration-500 hover:[text-shadow:_2px_2px_8px_rgba(22,227,242,0.75)] focus:text-lg  focus:[text-shadow:_2px_2px_8px_rgba(22,227,242,0.75)]`}>
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        {/* Middle */}
        {/* Right */}
        <li>
          <ul className='flex flex-col sm:flex-row'>
            <li>
              <button>LogIn</button>
            </li>
            <li>
              <button>Signup</button>
            </li>
          </ul>
        </li>
        {/* Right */}
      </ul>
    </nav>
  );
};

export default Nav;
