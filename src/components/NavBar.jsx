import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <div className="logo">
        <span className="logo_left">Goofy </span>
        <span className="logo_right">Nerds</span>
      </div>
      <ul className="menu">
        <li className="menuItems">Home</li>
        <li className="menuItems">About</li>
        <li className="menuItems">Merch</li>
        <li className="menuItems">Blogs</li>
        <li className="menuItems">Contact</li>
        <li className="menuItems signupBtn">SignUp</li>
        <li className="menuItems loginBtn">LogIn</li>
      </ul>
    </div>
  );
};

export default NavBar;
