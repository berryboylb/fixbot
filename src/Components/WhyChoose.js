import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import H3 from "./H3"
import P from "./P";
import Reason from "./Reason";

const WhyChoose = () => {
    const header = "Why choose us";
    const paragraph = "With lots of features to choose from, your satisfaction is guaranteed"
    const reasons = [
        {
            id: 1,
            img_src: "/images/EasytoUse.svg",
            reason: "Easy to use and install",
            time: "10 mins install time"
        },
        {
            id: 2,
            img_src: "/images/Best Guarantee.svg",
            reason: "Best Price Guarantee",
            time: "Plans cutated for you"
        },
        {
            id: 3,
            img_src: "/images/Trusted.svg",
            reason: "Trusted and Secure",
            time: "Protects your privacy"
        },
        {
            id: 4,
            img_src: "/images/Help.svg",
            reason: "SOS Guarantee",
            time: "Get emergency assistance"
        },
        {
            id: 5,
            img_src: "/images/track.svg",
            reason: "Status tracker",
            time: "Keep track of your car health"
        },
        {
            id: 6,
            img_src: "/images/Database.svg",
            reason: "Database access",
            time: "Access our partners"
        },
        {
            id: 7,
            img_src: "/images/Health.svg",
            reason: "Prolonged vehicle health",
            time: "Maintains optimum health"
        },
        {
            id: 8,
            img_src: "/images/Time.svg",
            reason: "2 year warranty",
            time: "Avaialble to all plans"
        },
    ]

    return (
        <section className="why-choose">
            <div className="my-container why-choose-inner">
                <H3 content={header} />
                <P content={paragraph}/>
                <div className="reason-cont">
                    <Reason reasons={reasons}/>
                </div>
                
            </div>
        </section>
    )
}

export default WhyChoose
