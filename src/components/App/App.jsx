import { Route, Routes } from "react-router";
import Layout from '../Layout';
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const CardsPage = lazy(() => import("../../pages/CardsPage"));

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/cards" element={<CardsPage />} />

                <Route path="*" element={<NotFoundPage />}/>
            </Route>
        </Routes>
    )
}

export default App;