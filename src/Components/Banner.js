import H1 from "./H1"
import H3 from "./H3"
import P from "./P"
import WaitlistForm from "./WaitlistForm";
const Banner = () => {

    const header = "Never Guess the Faults of Your Car again";
    const paragraph = "With FixBot tracking your vehicle needs, You don’t have to worry about breakdowns anymore. Stop the guesswork. Get early access to our services today."
    const smallHeader = "Join the waitlist";
    return (
        <section className="banner">
            <div className="my-container banner-inner">
                <H1 content = {header}/>
                <P content= {paragraph}/>
                <H3 content= {smallHeader}/>
                <WaitlistForm/>
            </div>
        </section>
    )
}

export default Banner
