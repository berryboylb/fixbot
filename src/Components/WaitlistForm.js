import { useState } from "react";
const WaitlistForm = () => {
    const [email, setEmail] = useState("");
    
    const handleForm = (e)=> {
        e.preventDefault();
        console.log(email);
    }
    return (
        <form  className="newsletterform" onSubmit={handleForm}>
            <div className="email-con">
                <input type="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} placeholder="Enter your email address here"/>
            </div>
            <div className="submit-btn">
                <input type="submit" value="Register now" />
            </div>
        </form>
    )
}

export default WaitlistForm
