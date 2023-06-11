import {createBrowserRouter, Outlet} from 'react-router-dom'
import Home from "../pages/home";
import Error404 from "../pages/404";
import ComingSoon from "../pages/comingSoon";
import Products from "../pages/products";
import Header from "../component/header";
import Footer from "../component/footer";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (<Layout><Home/></Layout>)
    },
    {
        path: '*',
        element: <Layout><Error404/></Layout>
    },
    {
        path: 'coming-soon',
        element: <Layout><ComingSoon/></Layout>
    },
    {
        path: 'products',
        element: <Layout><Products/></Layout>
    }
])

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Outlet />
            <Footer />
        </>
    );
}
