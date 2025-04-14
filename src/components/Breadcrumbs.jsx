import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(Boolean);

    let breadcrumbsPath = "";
    return (
        <div className="breadcrumbs">
            {pathnames.length === 0 ? (
                <span className="active-breadcrumbs">Home</span>
            ) : (
                <Link to="/">Home</Link>
            )}

            {pathnames.map((path, index) => {
                breadcrumbsPath += `/${path}`;
                const isLast = index === pathnames.length - 1;

                return (
                    <span key={path}>
                        <span style={{ margin: "0 5px", color: "#333333" }}>
                            &gt;
                        </span>
                        {isLast ? (
                            <span className="active-breadcrumbs">{path}</span>
                        ) : (
                            <Link to={breadcrumbsPath}>{path}</Link>
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
