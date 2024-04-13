import Logo from "./Logo";

const NavBar = ({ children }) => {
  <Logo />;
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
};

export default NavBar;
