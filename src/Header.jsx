export default function Header() {
  return (
    <header className="header">
      <img src="src/assets/react.svg" alt="react-logo" className="nav-logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-item-list">About</li>
          <li className="nav-item-list">Pricing</li>
          <li className="nav-item-list">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
