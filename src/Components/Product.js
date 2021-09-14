import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import H1 from "./H1"
import H3 from "./H3"
const Product = ({products}) => {
    return (
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
    )
}

export default Product
