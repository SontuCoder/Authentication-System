import React, { useEffect, useState } from 'react'
import { Container,  Row, Col, Table  } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const token = localStorage.getItem("token");
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/user", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                });
                const result = await response.json();
                console.log(result);
                setUser(result);
            } catch (error) {
                console.log(error.message);
            }
        } 
        if(token){
            fetchUser();
        } else{
            navigate("/login");
        }
    },[token, navigate]);

    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                <h1 className='text-center'>
                    Dashboard
                </h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user && user.name && user.email &&(
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;

