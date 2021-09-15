import H3 from "./H3";
import P from "./P";
import { Link } from "react-router-dom";

const Options = () => {
    const header1 = "Earn Money offering your service";
    const paragrapgh = "Are you a mechanics or a spare parts vendor?";
    const header2 = "Get Access to Vetted Mechanics and Spare Parts Dealers";
    const paragrapgh2 = "Get the most complete features of the movie that make it easy for you"

    return (
        <section className="options">
            <div className="my-container inner">
                <div className="mechanic">
                    <P content={paragrapgh}/>
                    <H3 content={header1}/>
                    <Link to="get started">Get Started</Link>
                </div>
                <div className="spare">
                    <H3 content={header2}/>
                    <P content={paragrapgh2}/>
                    <Link to="get started">Upgrade</Link>
                </div>
            </div>
        </section>
    )
}

export default Options
