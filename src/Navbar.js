import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
                <Link to="/">Mars Rovers</Link>
            <div className="links">
                <Link to="/curiosity">Curiosity</Link>
                <Link to="/opportunity">Opportunity</Link>
                <Link to="/spirit">Spirit</Link>
                <Link to="/perseverance">Perseverance</Link>

            </div>
        </nav>
     );
}
 
export default Navbar;
