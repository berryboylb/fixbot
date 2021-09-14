import H3 from "./H3"
import P from "./P"
import Product from "./Product";

const Products = () => {
    const header= "Our Products";
    const paragraph = "Our products and services are affordable to you, no matter your needs. Fixbot offers a range of prices to fit every budget";
    const products = [
        {
            id: 1,
            tag: "",
            planName: "Basic Plan",
            cost: "Free",
            p: "Unlock our basic feature with this plan",
            op1: "Free FixBot Dongle",
            op2: "1 Year Service Subscription",
            op3: "2 Year Product Warranty",
            op4: "24/7 Support System",
            link: "Get Started",
        },
        {
            id: 2,
            tag: "MOST POPULAR PLAN",
            planName: "Standard Plan",
            cost: "#25,000/yr",
            p: "Unlock our basic feature with this plan",
            op1: "Free FixBot Dongle",
            op2: "1 Year Service Subscription",
            op3: "2 Year Product Warranty",
            op4: "24/7 Support System",
            link: "Talk to Us",
        },
        {
            id: 3,
            tag: "",
            planName: "Enterprise Plan",
            cost: "**Price varies",
            p: "Unlock our basic feature with this plan",
            op1: "Free FixBot Dongle",
            op2: "1 Year Service Subscription",
            op3: "2 Year Product Warranty",
            op4: "24/7 Support System",
            link: "Talk to Us",
        },
    ]

    return (
        <section className="products">
            <div className="my-container inner">
                <H3 content={header}/>
                <P content={paragraph}/>
                <Product products={products}/> 
            </div>
        </section>
    )
}

export default Products
