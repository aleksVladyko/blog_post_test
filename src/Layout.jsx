import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
            />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
