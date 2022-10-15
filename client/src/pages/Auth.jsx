import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card
                className="p-5"
                style={{ width: 500 }}
            >
                <h2 className="m-auto mb-3">
                    { isLogin ? "Login" : "Register" }
                </h2>
                <Form>
                    <Form.Control
                        className="mb-3"
                        placeholder="Email"
                    />
                    <Form.Control
                        className="mb-3"
                        placeholder="Password"
                    />
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            { isLogin ?
                                <NavLink to={ REGISTRATION_ROUTE }>
                                    I don't have an account
                                </NavLink>
                            :
                                <NavLink to={ LOGIN_ROUTE }>
                                    I have an account
                                </NavLink>
                            }
                        </div>
                        <Button>
                            { isLogin ? "Sign in" : "Sign up" }
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
};

export default Auth;