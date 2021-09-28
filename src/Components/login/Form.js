import { useState } from "react"
import { Link } from "react-router-dom"
import Styles from './css/style.module.css'
import H1 from "../H1"
import P from "../P"
const Form = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const [disable, setDisable] = useState(true);
    const header = "Create your account"
    const paragraph = "I have read and agree to the Terms of Service"

    const handleClick = () => {
        setDisable(!disable)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username + email + password + conpassword)

        if(!username){
            alert("Please provide a name");
        } else if (!email){
            alert("Please enter an email")
        } else if (!password) {
            alert("Please input a password")
        }else if (!conpassword){
            alert("Please confirm your password")
        }else if(conpassword === password) {
            alert("Passwords do not match")
        }
    }
    return (
        <form className={Styles.form} onSubmit={handleSubmit}>
            <H1 content ={header}/>
            <div>
                <label htmlFor="name">Name</label>
                <input type="Text" id="name" value={username} onChange={(e)=> {setUsername(e.target.value)}} className={Styles.text} placeholder="input your Name in here" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} className={Styles.text} placeholder="input your email in here" />
            </div>
            <div>
                <label htmlFor="pwd">Password</label>
                <input type="password" id="pwd" value={password} className={Styles.text} onChange={(e)=> {setPassword(e.target.value)}} placeholder="input your password in here" />
            </div>
            <div>
                <label htmlFor="con-pwd">Confirm Password</label>
                <input type="password" id="con-pwd" value={conpassword} className={Styles.text} onChange={(e)=> {setConPassword(e.target.value)}} placeholder="Confirm password" />
            </div>
            <div className={Styles.accept}>
                <input type="checkbox" name="agree" id="agree"  onClick={handleClick}/>
                <P content ={paragraph}/>
            </div>

            <div className={Styles.auth}>
                <button className={Styles.submit} type="submit" disabled = {disable}>Sign up</button>
                <p className={Styles.space}>Or</p>
                <button className={Styles.goggle}>Sign up with google</button>
                <p className={Styles.link}>Doesn’t have an account? <Link to="/"> Sign in now</Link> </p>
            </div>
        </form>
    )
}

export default Form
