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
            id: 1,
            feauture: "Modern Vehicle Diagnostics",
            fixbot: "✔",
            others: "✔"
        },
        {
            id: 2,
            feauture: "Real-Time Data & Tracking",
            fixbot: "✔",
            others: "✔"
        },
        {   
            id: 3,
            feauture: "SOS Emergency Assistance",
            fixbot: "✔",
            others: "✔"
        },
        {
            id: 4,
            feauture: "Fuel Consumption Efficiency",
            fixbot: "✔",
            others: "✔"
        },
        {
            id: 5,
            feauture: "Access to Auto-parts Dealers",
            fixbot: "✔",
            others: "-"
        },
        {
            id: 6,
            feauture: "Access to mechanics nationwide",
            fixbot: "✔",
            others: "-"
        },
        {
            id: 7,
            feauture: "Attractive pricing",
            fixbot: "✔",
            others: "-"
        },
        {
            id: 8,
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
                                <p key={feature.id} className="left">{feature.feauture}</p>
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
