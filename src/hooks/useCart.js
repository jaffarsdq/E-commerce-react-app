import { useContext, useEffect } from "react";
import axios from "axios";
import CartContext from "../context/CartContext";
import { getCartByUser } from "../apis/fakeStoreApi";

function useCart(userId) {
    const {cart, setCart} = useContext(CartContext);

    async function fetchUserCart(userId) {
        const response = await axios.get(getCartByUser(userId));
        setCart(response.data[0]);
    }

    useEffect(() => {
        fetchUserCart(userId);
    }, [userId]);

    return [cart, setCart];
}

export default useCart;