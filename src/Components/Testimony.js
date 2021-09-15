import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import P from "./P"

const Testimony = ({testimonies}) => {
    return (
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
    )
}

export default Testimony
