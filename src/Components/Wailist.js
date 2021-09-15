import { Link } from "react-router-dom";
import H3 from "./H3";
import P from "./P";
import NewsletterForm from "./NewsletterForm"

const Wailist = () => {
    const header = "Join the waitlist";
    const paragraph = "Join our news letter to get updates on upcoming offers and get notified about our new products";
    const paragraph2 = "Want to become a member of our community?"
    return (
        <section className="waitlist">
            <div className="my-container inner">
                <H3 content={header}/>
                <P content={paragraph}/>
                <div className="news-con">
                    <NewsletterForm/>
                    <p>{paragraph2} <Link to = "join Us">Join Us</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Wailist
