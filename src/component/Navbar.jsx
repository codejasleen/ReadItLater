import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-pink-600 text-white p-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">📚 ReadItLater</Link>
      </div>

      <div className="space-x-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "underline" : ""}>
          Home
        </NavLink>
        <NavLink 
          to="/news" 
          className={({ isActive }) => isActive ? "underline" : ""}>
          News
        </NavLink>
        <NavLink 
          to="/articles" 
          className={({ isActive }) => isActive ? "underline" : ""}>
          All Articles
        </NavLink>
        <NavLink 
          to="/add" 
          className={({ isActive }) => isActive ? "underline" : ""}>
          Add Article
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
