import "./header.scss";

export const Header = () => {
  return <header className="header">
    <div className="header-container">
      <div className="logo-container">
        <img src="logo-1.svg"></img>
        <img src="logo-2.svg"></img>
      </div>
      <nav>
        <ul className="nav-list">
          <li>Home</li>
          <li>Products</li>
          <li>
            <div className="nav-cart"></div>
          </li>
        </ul>
      </nav>
    </div>
  </header>;
};
