import { Link } from 'react-router-dom'
import { useState } from 'react';


const Navbar = () => {

    const [isExpanded, setIsExpanded] = useState(false)

    return ( 
        <nav className="navbar">
                <div className='mars_link'><Link to="/">Mars Rovers</Link></div>

                <div className='nav_links'>

                    <Link to="/curiosity" >Curiosity</Link>

                    <Link to="/opportunity" >Opportunity</Link>

                    <Link to="/spirit" >Spirit</Link>

                    <Link to="/perseverance" >Perseverance</Link>
                </div>

                <button onClick={() => {setIsExpanded(!isExpanded)}} className="menu"><img src="./rover.svg" alt="rover" />
                
                <div className={isExpanded ? "hamburger" : "unvisible_menu"}>


                    <Link onClick={() => {setIsExpanded(!isExpanded)}} to="/curiosity" >Curiosity</Link>

                    <Link onClick={() => {setIsExpanded(!isExpanded)}} to="/opportunity" >Opportunity</Link>

                    <Link onClick={() => {setIsExpanded(!isExpanded)}} to="/spirit" >Spirit</Link>

                    <Link onClick={() => {setIsExpanded(!isExpanded)}} to="/perseverance" >Perseverance</Link>

                    </div>

                </button>


                
        </nav>
     );
}
 
export default Navbar;
