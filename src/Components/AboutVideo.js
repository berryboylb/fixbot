import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import H3 from "./H3"
import P from "./P"
import Video from "./Video";


const AboutVideo = () => {
    const smallHeader = "What is FixBot?";
    const paragraph = "FixBot is a Telematics as a Service company that utilizes hardware and proprietary software that helps owners and managers of vehicles and fleets to monitior and manage their assets in a smarter and more efficient way. Our mission is to make every vehicle super smart and reliable"
    return (
        <section className="about-videos">
            <div className="my-container about-videos-inner">
                <div className="about">
                    <H3 content={smallHeader}/>
                    <P content={paragraph}/>
                    <Link to="learn more">Learn More <FontAwesomeIcon className= "icon" icon={faChevronRight} /></Link>
                </div>
                <div className="video-con">
                    <Video/>
                </div>
            </div>
        </section>
    )
}

export default AboutVideo
