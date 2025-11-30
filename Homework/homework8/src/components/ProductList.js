import React from 'react';

const products = [
    {id:1, name: "Wireless Headphones", price: 199.99, was:249.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"},
    {id:2, name: "Smart Watch", price: 299.99, was:399.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"},
    {id:3, name: "Laptop Stand", price: 49.99, was:79.99, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop"},
    {id:4, name: "Mechanical Keyboard", price: 129.99, was:179.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop"},
    {id:5, name: "Portable Charger", price: 39.99, was:59.99, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop"},
    {id:6, name: "Wireless Mouse", price: 59.99, was:89.99, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop"}
]

const ProductList = ({addToCart}) => {
    return (
        <>
            <h2 className="producttitle">Products</h2>
            <section className="cardcontainer">
                {
                    products.map(
                        (product) => {
                            return (
                                <div key={product.id} className="card">
                                    <img src={product.image} alt={product.name}/>
                                    <p className="productname">
                                        {product.name}
                                    </p>
                                    <p className="productprice">
                                        <s>${product.was}</s>
                                        <span>${product.price}</span>
                                    </p>
                                    <button className="btn_addcart" onClick={()=>addToCart(product)}>
                                        Add to cart
                                    </button>
                                </div>
                            )
                        }
                    )
                }
            </section>
        </>
    )
}

export default ProductList;
