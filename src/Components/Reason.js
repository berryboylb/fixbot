const Reason = ({reasons}) => {
    return (
        <div className="resort">
            {reasons.map((reason)=>(
                <div className="boost">
                    <div className="resort-inner" key={reason.id}>
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
