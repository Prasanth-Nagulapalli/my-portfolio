import React from "react";
import { menu } from "../../data";
import "./Footer.css";
import { socialHandles } from "../../data";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="section__wrapper">
        <ul className="nav__link__container">
          {menu.map((list, index) => (
            <li key={index}>
              <Link
                className="nav__link"
                // to={list.name.toLowerCase()}
                to={list.name === "Home" ? "header" : list.name.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="social__handles__container">
          {socialHandles.map((list, index) => (
            <a
              href={list.link}
              className="icon__container social__handle"
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              {list.icon}
            </a>
          ))}
        </div>
        <div className="copyright__container">
          <h3>Copyright &copy; All rights reserved - | {currentYear}</h3>
          <p className="text__muted">Built with love by N Prasanth Kumar </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
