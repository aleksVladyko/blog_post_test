import { useState } from 'react';
import {Outlet, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack'

const Layout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='mt-1' variant="info" onClick={handleShow}>
        Mеню
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack  onClick={handleClose} variant="info" gap={3}>
            <Link style={{textDecoration: 'none'}} to="/"  >Список постов</Link>
            <Link style={{textDecoration: 'none'}} to="/about">О себе</Link>
          </Stack>
          </Offcanvas.Body>
      </Offcanvas>
      <Outlet/>
      <footer className="fotter mt-auto p-2 fixed-bottom">
        <div className="text-end">
          <span className="fs-5">designed by Vladyko Alexander.</span>
        </div>
      </footer>
    </>
  );
}

export default Layout;