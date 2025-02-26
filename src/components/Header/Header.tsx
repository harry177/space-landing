import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import "./header.scss";

export const Header = () => {
  const mobile = useMediaQuery("(max-width: 729px)");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src="logo-1.svg"></img>
          <img src="logo-2.svg"></img>
        </div>
        {mobile ? (
          <button
            className={`burger-button ${isOpen ? "burger-button--open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="burger-button__line" />
            <div className="burger-button__line" />
            <div className="burger-button__line" />
          </button>
        ) : (
          <nav>
            <ul className="nav-list">
              <li>Home</li>
              <li>Products</li>
              <li>
                <div className="nav-cart"></div>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {isOpen && (
        <nav className="header__mobile-layer">
          <ul className="nav-list__mobile">
            <li className="header__mobile-section">Home</li>
            <li className="header__mobile-section">Products</li>
            <li className="header__mobile-section">
              <div className="nav-cart"></div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
