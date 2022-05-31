import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Tuấn Khanh - Booking ✔</span>
        </Link>
        <div className="xinchao">{user ? "Xin chào:  " + user.username : (
          <div className="navItems">
            <button className="navButton"><Link to="/register" style={{ textDecoration : "none"}}>Đăng ký</Link></button>
            <button className="navButton"><Link to="/login" style={{ textDecoration : "none"}}>Đăng nhập</Link></button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
