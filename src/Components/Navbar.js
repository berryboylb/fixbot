import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const [mobileNav, setmobileNav] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const handleMobileNav = () => {
        if(isMobile){
            setmobileNav(!mobileNav);
        }
        
    }
   
    return (
        <nav>
           <div className="logo">
              <Link to = "/"><img src="/images/fixbotLogo.svg" alt="logo"/></Link>
           </div>
           <ul className={mobileNav ? "nav-active" : "nav-links"}>
                <li><Link onClick={handleMobileNav} to = "/" className ={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                <li><Link onClick={handleMobileNav} to = "services" className ={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
                <li><Link onClick={handleMobileNav} to = "about us" className ={location.pathname === "/about us" ? "active" : ""}>About Us</Link></li>
                <li><Link onClick={handleMobileNav} to = "blog" className ={location.pathname === "/blog" ? "active" : ""}>Blog</Link></li>
                <li><Link onClick={handleMobileNav} to = "contact us" className ={location.pathname === "/contact us" ? "active" : ""}>Contact Us</Link></li>
                <li className="login"><Link onClick={handleMobileNav} to = "login" className ={location.pathname === "/login" ? "active" : ""}>Login</Link></li>
                <li className="request"><Link onClick={handleMobileNav} to = "request access" className ={location.pathname === "/request access" ? "active" : ""}>Request Access</Link></li>
           </ul>
           <div className={mobileNav ? "bro" : "burger"}  onClick={handleMobileNav}>
                <div className="line0"></div>
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
        </nav>
    )
}

export default Navbar
