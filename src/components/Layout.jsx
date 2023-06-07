import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "react-bootstrap";

const Layout = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <Header
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
            />
            <Outlet />
            <Footer />
        </Container>
    );
};

export default Layout;
