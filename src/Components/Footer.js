import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faCopyright} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
const Footer = () => {
    const links = [
        {
            id: 1,
            title: "Company",
            link0: "About Us",
            link1: "FAQ",
            link2: "Blog"
        },
        {
            id: 2,
            title: "Products",
            link0: "How it Works",
            link1: "Features",
            link2: "Pricing"
        },
    ]
    return (
        <footer>
            <div className="my-container inner">
                <div className="foot-cont">
                <div className="cont">
                    <div className="img-con">
                        <img src="/images/fixbotLogo.svg" alt="Fixbotlogo" />
                    </div>
                    <p>Connect With us</p>
                    <div className="icons-con">
                        <a href="https://goggle.com"><FontAwesomeIcon className= "icons" icon={faTwitter} /></a>
                        <a href="https://goggle.com"><FontAwesomeIcon className= "icons" icon={faFacebook} /></a>
                        <a href="https://goggle.com"><FontAwesomeIcon className= "icons" icon={faInstagram} /></a>
                        <a href="https://goggle.com"><FontAwesomeIcon className= "icons" icon={faLinkedin} /></a>
                    </div>
                </div>
                <div className="links-main">
                    {links.map((link) => (
                        <div key={link.id}>
                            <h1>{link.title}</h1>
                            <p><Link to="get started">{link.link0}</Link></p>
                            <p><Link to="get started">{link.link1}</Link></p>
                            <p><Link to="get started">{link.link2}</Link></p>
                        </div>
                        
                    ))}
                        <div>
                            <h1>Contact Us</h1>
                            <p><FontAwesomeIcon className= "cons" icon={faPhone} /> +234-7031902274 </p>
                            <p><FontAwesomeIcon className= "cons" icon={faPhone} /> +234-7013748231</p>
                            <p><FontAwesomeIcon className= "cons" icon={faEnvelope} /> futofixbot@gmail.com</p>
                        </div>
                </div>
                </div>
                <div className="rights">
                    <p><FontAwesomeIcon className= "cons" icon={faCopyright} /> 2021. FixBot Technologies Limited. All Rights Reserved.</p>
                    <p><Link to="terms">Terms and Conditions</Link></p>
                    <p><Link to="privacy">Privacy Policy</Link></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
