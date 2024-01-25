import '../styles/navTabs.css';
export default function NavTabs() {
  return (
    <ul className="nav-container">
      <li className="nav-header">
        Noah Lara
      </li>
      <li className="nav-item">
        <a href="#about"> About </a>
      </li>
      <li className="nav-item">
        <a href="#projects"> Projects </a>
      </li>
      <li className="nav-item">
        <a href="#contact"> Contact </a>
      </li>
    </ul>
  );
}

