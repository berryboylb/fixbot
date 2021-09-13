import H1 from "./H1"
import H3 from "./H3"
import NewsletterForm from "./NewsletterForm";
import P from "./P"
const Banner = () => {

    const header = "Your No. 1 stop for all your vehicle needs.";
    const paragraph = "With FixBot tracking your vehicle needs, You don’t have to worry about breakdowns anymore. Stop the guesswork. Get early access to our services today."
    const smallHeader = "Join the waitlist";
    return (
        <section className="banner">
            <div className="my-container banner-inner">
                <H1 content = {header}/>
                <P content= {paragraph}/>
                <H3 content= {smallHeader}/>
                <NewsletterForm/>
            </div>
        </section>
    )
}

export default Banner
