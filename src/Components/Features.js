
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import H1 from "./H1";
import P from "./P"

const Features = () => {
    const header= "All The features You Need";
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

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

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

                <div className="cont1">
                    <Carousel className="carousel" 
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                   <div className="slide1">
                    <div className="head">
                            {headers.map((title) => (
                                    <h3 className={title.title}>{title.title}</h3>
                            ))}
                        </div>
                        <div className="body" >
                            {features.map((feature) => (
                                    <div key={feature.id}>
                                         <p key={feature.id} className="left">{feature.feauture}</p>
                                        <p className="green">{feature.fixbot}</p>
                                    </div>
                            ))}
                        </div>
                   </div>
                    <div className="slide2">
                        <div className="head">
                            {headers.map((title) => (
                                    <h3 className={title.title}>{title.title}</h3>
                            ))}
                        </div>
                        <div className="body"  >
                            {features.map((feature) => (
                                    <div key={feature.id}>
                                    <p key={feature.id} className="left">{feature.feauture}</p>
                                    <p className="green">{feature.others}</p>
                                    </div>
                            ))}
                        </div>
                    </div>
                    </Carousel>
                </div>
            </div>
       </section>
    )
}

export default Features
