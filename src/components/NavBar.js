import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map(link => (
        <a href={`#${link}`} key={link}>{link}</a> // Map each link to an <a> tag with href and key
      ))}
    </nav>
  );
}

export default NavBar;
