
import logo from '../images/__logo.svg';

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Место"
        className="logo"
      />
    </header>
  )
}

export default Header;