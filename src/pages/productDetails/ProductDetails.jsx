import React, { useContext, useEffect, useState } from 'react'

//react router imports
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
//css import
import './productDetails.css'
import axios from 'axios';
//api import
import { addProductToUserCart, getProduct } from '../../apis/fakeStoreApi';
//context import
import UserContext from '../../context/UserContext';
import CartContext from '../../context/CartContext';

function ProductDetails() {

    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    const {user} = useContext(UserContext);
    const {setCart} = useContext(CartContext);

    async function downloadProduct(id) {
      try {
        const response = await axios.get(getProduct(id));
        const responseObject = response.data;
        setProduct(responseObject);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }

    async function addProductToCart() {
        if(!user) return;
        const response = await axios.put(addProductToUserCart(), {userId: user.id, productId: id});
        setCart({...response.data});
        navigate(`/cart/${user.id}`);
    }

    useEffect(() => {
        downloadProduct(id);
    }, [id]);

    if (!product) {
    return <p>Loading...</p>;
    }

  return (
    <div className="product-details-wrapper container my-5">
        <div className="row col-11 mx-auto justify-content-between">
            <div className="col-sm-6 col-md-12 col-lg-5 col-xl-5 d-flex justify-content-around">
                <img className="img-fluid" 
                src={product.image} 
                alt="product" 
                id="productImage"/>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-6 col-xl-6 me-5 d-flex flex-column justify-content-between py-2">
                <h3 className="display-5 fw-normal fs-1" id="productTitle">
                    {product.title}
                </h3>
                <h3 className="fw-normal text-success py-2" id="productPrice">
                    &#8377;{product.price}
                </h3>
                <h4 className="text-muted fw-light fs-5">
                    Description
                </h4>
                <p className="lead text-break" id="productDescription">
                    {product.description}
                </p>
                <h3 className="lead">
                    rating : <strong>{product.rating.rate}</strong>
                </h3>
                <h3 className="lead py-3">
                    rated by <strong>{product.rating.count}</strong> people
                </h3>
                <div className="row d-flex justify-content-around g-0">
                    <button className="col-md-6 p-2 m-1 btn btn-primary" onClick={addProductToCart}>
                        <i className="bi bi-plus"></i> Add to cart
                    </button>
                    <Link to={`/cart/${user && user.id}`} className="col-md-5 p-2 m-1 btn btn-warning">
                        <i className="bi bi-cart3"></i> Go to cart
                    </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProductDetails