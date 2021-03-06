import { useState } from "react";
const NewsletterForm = () => {
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
                <input type="submit" value="Get Updates" />
            </div>
        </form>
    )
}

export default NewsletterForm
