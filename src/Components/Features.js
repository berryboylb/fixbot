import H1 from "./H1";
import P from "./P"

const Features = () => {
    const header= "All The featuresYou Need";
    const paragraph = "FixBot beats other brands out of the market.";
    const headers = [
        {
            title: "Features"
        },
        {
            title: "FixBot"
        },
        {
            title: "Other Brands"
        },
    ]
    const features = [
        {
            feauture: "Modern Vehicle Diagnostics",
            fixbot: "✔",
            others: "✔"
        },
        {
            feauture: "Real-Time Data & Tracking",
            fixbot: "✔",
            others: "✔"
        },
        {
            feauture: "SOS Emergency Assistance",
            fixbot: "✔",
            others: "✔"
        },
        {
            feauture: "Fuel Consumption Efficiency",
            fixbot: "✔",
            others: "✔"
        },
        {
            feauture: "Access to Auto-parts Dealers",
            fixbot: "✔",
            others: "-"
        },
        {
            feauture: "Access to mechanics nationwide",
            fixbot: "✔",
            others: "-"
        },
        {
            feauture: "Attractive pricing",
            fixbot: "✔",
            others: "-"
        },
        {
            feauture: "Dashboard Access for personal monitoring",
            fixbot: "✔",
            others: "-"
        },
    ]

    return (
       <section className="features">
                <div className="my-container features-inner">
                <H1 content={header}/>
                <P content={paragraph}/>

            <div className="cont">
                <div className="feature">
                        {headers.map((title) => (
                                <h3>{title.title}</h3>
                        ))}
                    </div>
                    <div className="feature1">
                        {features.map((feature) => (
                                <>
                                <p>{feature.feauture}</p>
                                <p className="green">{feature.fixbot}</p>
                                <p className="green">{feature.others}</p>
                                </>
                        ))}
                    </div>
            </div>
            </div>
       </section>
    )
}

export default Features
