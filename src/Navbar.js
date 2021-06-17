import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
                <Link style={{fontSize: '30px'}} to="/">Mars Rovers</Link>

            <div className="links">
                <Link to="/curiosity" style={{fontSize: '20px'}} >Curiosity</Link>

                <Link to="/opportunity" style={{fontSize: '20px'}} >Opportunity</Link>

                <Link to="/spirit" style={{fontSize: '20px'}} >Spirit</Link>

                <Link to="/perseverance" style={{fontSize: '20px'}} >Perseverance</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
