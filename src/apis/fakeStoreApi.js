const apiUrl = import.meta.env.VITE_BASE_URL

export function getAllCategories() {
    return `${apiUrl}/products/categories`;
}

export function getAllProducts() {
    return `${apiUrl}/products`;
}

export function getAllProductsByCategory(category) {
    return `${apiUrl}/products/category/${category}`;
}

export function getProduct(id) {
    return `${apiUrl}/products/${id}`;
}
export function signup() {
    return `${apiUrl}/users`;
}

export function signIn() {
    return `${apiUrl}/auth/login`;
}

export function getCartByUser(userId) {
    return `${apiUrl}/carts/user/${userId}`;
}

export function addProductToUserCart() {
    return `${apiUrl}/carts`;
} 

export function updateProductInCart() {
    return `${apiUrl}/carts/updateProduct`;
} 