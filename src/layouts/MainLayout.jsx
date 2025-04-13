import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const MainLayout = () => {
    return (
        <>
            {/* <h1>Navbar</h1> */}
            <main>
                <Breadcrumbs />
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
