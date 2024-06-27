import { Link, NavLink } from "react-router-dom";

const links = [
  {
    path: "/products",
    name: "Products",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/contact",
    name: "Contact",
  },
  {
    path: "/aboutus",
    name: "About Us",
  },
  {
    path: "/fetch",
    name: "Fetch",
  },
];

const Header = () => {
  return (
    <header>
      <h1 id="nav-title">
        <Link to="/">SEMESTER 3</Link>
      </h1>
      <nav>
        <ul>
          {links.map(({ path, name }) => {
            return (
              <li key={name}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;