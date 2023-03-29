import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav>
        <Link to="/host" className="nav--link">
          Host
        </Link>
        <Link to="/about" className="nav--link">
          About
        </Link>
        <Link to="/vans" className="nav--link">
          Vans
        </Link>
      </nav>
    </header>
  );
}
