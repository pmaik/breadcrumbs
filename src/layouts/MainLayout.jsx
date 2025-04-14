import React from "react";
import { Outlet, Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useTheme } from "../context/ThemeContext";
import { LIGHT } from "../Constants";

const MainLayout = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <div className="navbar">
                <Breadcrumbs />
                <div className="nav-links">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <button
                        onClick={toggleTheme}
                        className={`theme-toggle-btn ${theme}-mode-btn`}
                    >
                        {theme === LIGHT ? "🌗" : "🌓"}
                    </button>
                </div>
            </div>

            <main className="main">
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
