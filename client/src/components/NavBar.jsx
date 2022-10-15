import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';

const NavBar = observer(() => {
    const { user } = useContext(Context);

    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <NavLink to={SHOP_ROUTE}>Navbar scroll</NavLink>
                <Nav
                    className="ml-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                >
                    {user.isAuth ?
                        <>
                            <Button className="me-2">
                                Admin Panel
                            </Button>
                            <Button>
                                Exit
                            </Button>
                        </>
                        :
                        <>
                            <Button onClick={() => user.setIsAuth(true)}>
                                Login
                            </Button>
                        </>
                    }
                    
                </Nav>
            </Container>
        </Navbar>
    )
});

export default NavBar;
