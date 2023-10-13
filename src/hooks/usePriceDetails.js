import { useState, useEffect } from "react";

function usePriceDetails(products) {
    
    const [totalPrice, setTotalPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [discountedTotalPrice, setDiscountedTotalPrice] = useState(0)

    // Calculate the total price, discount, and discounted total price when items or their quantities change
    function calculatePrice(products) {
        const calculatedTotalPrice = products && products.reduce((accumulator, item) => {
            const itemTotalPrice = Math.round(item.price * item.quantity);
            return accumulator + itemTotalPrice;
        }, 0);
    
        const calculatedDiscount = Math.round(calculatedTotalPrice * 0.1); // 10% discount
        const calculatedDiscountedTotalPrice = calculatedTotalPrice - calculatedDiscount;
    
        setTotalPrice(calculatedTotalPrice);
        setDiscount(calculatedDiscount);
        setDiscountedTotalPrice(calculatedDiscountedTotalPrice);
    }

    useEffect(() => {
        calculatePrice(products)
    }, [products]);
    
    return [totalPrice, discount, discountedTotalPrice];
}

export default usePriceDetails;
