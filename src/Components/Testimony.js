import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import P from "./P"

const Testimony = ({testimonies}) => {
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
        <>
        <div className="testimony">
            {testimonies.map((testimony) => (
                <div key={testimony.id} className="bless">
                    <div className="comment-cont">
                        <P content={testimony.comment}/>
                    </div>
                    <div className="nam-rat">
                        <div className="nam-rat-in">
                            <div className="img-con">
                                <img src={testimony.img_src} alt="{testimony.img_src}" />
                            </div>
                            <div className="name-con">
                                <p className="bold">{testimony.name}</p>
                                <p className="pale">{testimony.location}</p>
                            </div>
                        </div>
                        <div className="rating-con">
                            <FontAwesomeIcon className= "icon" icon={faStar} /> 
                            <P content={testimony.rating}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <Carousel className="product1" 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {testimonies.map((testimony) => (
                <div key={testimony.id} className="bless">
                    <div className="comment-cont">
                        <P content={testimony.comment}/>
                    </div>
                    <div className="nam-rat">
                        <div className="nam-rat-in">
                            <div className="img-con">
                                <img src={testimony.img_src} alt="{testimony.img_src}" />
                            </div>
                            <div className="name-con">
                                <p className="bold">{testimony.name}</p>
                                <p className="pale">{testimony.location}</p>
                            </div>
                        </div>
                        <div className="rating-con">
                            <FontAwesomeIcon className= "icon" icon={faStar} /> 
                            <P content={testimony.rating}/>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
        </>
    )
}

export default Testimony
