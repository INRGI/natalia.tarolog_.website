import { Suspense } from "react";
import AppBar from "../AppBar";
import Loader from '../Loader';
import Footer from '../Footer';
import { Outlet } from "react-router";


const Layout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <Footer />
        </div>
    )
}

export default Layout;