import AboutVideo from "./AboutVideo"
import Banner from "./Banner"
import Features from "./Features"
import Footer from "./Footer"
import Options from "./Options"
import Products from "./Products"
import Testimonies from "./Testimonies"
import Wailist from "./Wailist"
import WhyChoose from "./WhyChoose"
import Navbar from "./Navbar"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <AboutVideo/>
            <Features/>
            <WhyChoose/>
            <Products/>
            <Testimonies/>
            <Options/>
            <Wailist/>
            <Footer/>
        </div>
    )
}

export default Home
