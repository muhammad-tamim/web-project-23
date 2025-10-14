import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CartPage from "../features/phones/pages/CartPage";
import FavoritesPage from "../features/phones/pages/FavoritesPage";
import PhoneDetailsPage from "../features/phones/pages/PhoneDetailsPage";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'phone-details/:id',
                Component: PhoneDetailsPage
            },
            {
                path: 'cart',
                Component: CartPage
            },
            {
                path: 'favorites',
                Component: FavoritesPage
            }
        ]
    },
])
