import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import H1 from "./H1"
import H3 from "./H3"
const Product = ({products}) => {
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
        <div className="product">
            {
                products.map((product)=> (
                    <div key={product.id} className={product.planName}>
                        <p className="starred"><FontAwesomeIcon className= "icon" icon={faStar} /> {product.tag}</p>
                        <H3 content={product.planName}/>
                        <H1 content={product.cost}/>
                        <p className="snip">Unlock our basic feature with this plan</p>
                        <div>
                            <p><FontAwesomeIcon className= "con" icon={faCheckCircle} /> {product.op1}</p>
                            <p><FontAwesomeIcon className= "con" icon={faCheckCircle} /> {product.op2}</p>
                            <p><FontAwesomeIcon className= "con" icon={faCheckCircle} /> {product.op3}</p>
                            <p><FontAwesomeIcon className= "con" icon={faCheckCircle} /> {product.op4}</p>
                        </div>
                        <a href="{product.link}">{product.link}</a>
                    </div>
                ))
            }
        </div>

        <Carousel className="product1" 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {
                products.map((product)=> (
                    <div key={product.id} className={product.planName}>
                        <p className="starred"><FontAwesomeIcon className= "icon" icon={faStar} /> {product.tag}</p>
                        <H3 content={product.planName}/>
                        <H1 content={product.cost}/>
                        <p className="snip">Unlock our basic feature with this plan</p>
                        <div>
                            <p><FontAwesomeIcon className= "con" icon={faCheckCircle} /> {product.op1}</p>
                            <p><FontAwesomeIcon className= "con" icon={faCheckCircle} /> {product.op2}</p>
                            <p><FontAwesomeIcon className= "con" icon={faCheckCircle} /> {product.op3}</p>
                            <p><FontAwesomeIcon className= "con" icon={faCheckCircle} /> {product.op4}</p>
                        </div>
                        <a href="{product.link}">{product.link}</a>
                    </div>
                ))
            }
        </Carousel>
        </>
    )
}

export default Product
