import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const Reason = ({reasons}) => {
    return (
        <div className="resort">
            {reasons.map((reason)=>(
                <div className="boost" key={reason.id}>
                    <div className="resort-inner" key={reason.id}>
                        <div className="icon">
                            <FontAwesomeIcon className= "con" icon={faHeart} />
                        </div>
                        <div className="fin">
                            <img src={reason.img_src} alt="" />
                        </div>
                        <div className="p2">
                            <p className="bold">{reason.reason}</p>
                            <p className="pale">{reason.time}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Reason
