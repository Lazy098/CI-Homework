import React from "react";
import CardProduct from './CardProduct';

const Section = () => {
    return(
        <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <CardProduct 
            title="Fancy Product"
            price1="40.00"
            price2="80.00"
            titles="View options"
            />
            <CardProduct 
            title="Special Item"
            price1="20.00"
            price2="18.00"
            promotionalPrice={true}
            checkstars={true}
            checksale={true}
            titles="Add to cart"/>
            <CardProduct 
            title="Sale Item"
            price1="50.00"
            price2="25.00"
            promotionalPrice={true}
            checksale={true}
            titles="Add to cart"/>
            <CardProduct 
            title="Popular Item"
            price1="40.00"
            checkstars={true}
            titles="Add to cart"/>
            <CardProduct 
            title="Sale Item"
            price1="50.00"
            price2="25.00"
            promotionalPrice={true}
            checksale={true}
            titles="Add to cart"/>
            <CardProduct 
            title="Fancy Product"
            price1="120.00"
            price2="280.00"
            titles="View options"/>
            <CardProduct 
            title="Special Item"
            price1="20.00"
            price2="18.00"
            promotionalPrice={true}
            checkstars={true}
            checksale={true}
            titles="Add to cart"/>
            <CardProduct 
            title="Popular Item"
            price1="40.00"
            checkstars={true}
            titles="Add to cart"/>
        </div>
    </div>
    </section>
    )
}
export default Section;