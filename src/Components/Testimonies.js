import H1 from "./H1";
import P from "./P";
import Testimony from "./Testimony";

const Testimonies = () => {
    const header = "Don’t just take our word for it...";
    const pargraph ="See what some of our best clients have to say ";
    const testimonies = [
        {
            id: 1,
            comment: `“As a lawyer, and as a mother, my day is constantly filled with activities: both work and family related.
            With FixBot, I don’t have to worry about my car breaking down on me, and I can concentrate on other things. “`,
            name:"Cassie Blake",
            location: "ABUJA,Nigeria",
            rating: "4.9",
            img_src: "/images/pic1.png"
        },
        {
            id: 2,
            comment: `“As a lawyer, and as a mother, my day is constantly filled with activities: both work and family related.
            With FixBot, I don’t have to worry about my car breaking down on me, and I can concentrate on other things. “`,
            name:"Cassie Blake",
            location: "ABUJA,Nigeria",
            rating: "4.9",
            img_src: "/images/pic2.png"
        },
        {
            id: 3,
            comment: `“As a lawyer, and as a mother, my day is constantly filled with activities: both work and family related.
            With FixBot, I don’t have to worry about my car breaking down on me, and I can concentrate on other things. “`,
            name:"Cassie Blake",
            location: "ABUJA,Nigeria",
            rating: "4.9",
            img_src: "/images/pic3.png"
        },
    ]
    return (
        <section className="testimonies">
            <div className="my-container inner">
                <H1 content={header}/>
                <P content={pargraph}/>
                <Testimony testimonies={testimonies}/>
            </div>
        </section>
    )
}

export default Testimonies
