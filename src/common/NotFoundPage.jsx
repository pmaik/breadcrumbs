import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1 className="">404</h1>
            <h2 className="">Page Not Found</h2>
            <p className="">
                Sorry, the page you are looking for doesn't exist or has been
                moved.
            </p>

            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default NotFoundPage;
