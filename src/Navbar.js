import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Hospital Name</h1>
      <div className="links">
        {/* <Link to="/">Home</Link> */}
        <Link to="/" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Home</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;