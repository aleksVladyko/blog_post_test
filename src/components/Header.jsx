import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import iconKot from "../img/kot.svg";

const Header = (props) => {
    const { handleShow, handleClose, show } = props;
    return (
        <>
            <Button className="mt-1" variant="info" onClick={handleShow}>
                Mеню
            </Button>

            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Container>
                            <Row>
                                <Col>
                                    <Image
                                        src={iconKot}
                                        rounded
                                        style={{
                                            height: "120px",
                                            width: "120px",
                                        }}
                                    />
                                </Col>
                                <Col className="d-flex flex-column align-self-center">
                                    <Row>Username</Row>
                                    <Row>@mail</Row>
                                </Col>
                            </Row>
                        </Container>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack onClick={handleClose} variant="info" gap={3}>
                        <Link style={{ textDecoration: "none" }} to="/">
                            Список постов
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/about">
                            О себе
                        </Link>
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};
Header.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    handleShow: PropTypes.func,
};
export default Header;
