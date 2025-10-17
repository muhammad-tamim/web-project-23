import toast from 'react-hot-toast'

export const getFavoritesToLocalStorage = () => {
    const favorites = localStorage.getItem("favorites")

    if (favorites) {
        return JSON.parse(favorites)
    }
    return []
}

export const addFavoritesToLocalStorage = (phone) => {
    const favorites = getFavoritesToLocalStorage()
    const isExist = favorites.find(p => p.id === phone.id)
    if (isExist) return toast.error("This phone is already exist to your favorites")
    favorites.push(phone)
    localStorage.setItem("favorites", JSON.stringify(favorites))
    toast.success("Your phone added to favorites")
}

export const removeFavoritesToLocalStorage = (id) => {
    const favorites = getFavoritesToLocalStorage()
    const remainingFavorites = favorites.filter(phone => phone.id !== id)
    localStorage.setItem("favorites", JSON.stringify(remainingFavorites))
    toast.error("Your phone are removed")
}



export const getCartToLocalStorage = () => {
    const cart = localStorage.getItem("cart")

    if (cart) {
        return JSON.parse(cart)
    }
    return []
}

export const addCartToLocalStorage = (phone) => {
    const cart = getCartToLocalStorage()
    const isExist = cart.find(p => p.id === phone.id)
    if (isExist) return toast.error("This phone is already exist to your cart")
    cart.push(phone)
    localStorage.setItem("cart", JSON.stringify(cart))
    toast.success("Your phone added to cart")
}

export const removeCartToLocalStorage = (id) => {
    const cart = getCartToLocalStorage()
    const remainingCart = cart.filter(phone => phone.id !== id)
    localStorage.setItem("cart", JSON.stringify(remainingCart))
    toast.error("Your cart item is removed")
}



