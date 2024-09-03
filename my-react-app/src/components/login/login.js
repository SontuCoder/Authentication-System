import React, {useState} from "react";
import "./login.css";
import {Form,Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData]= useState({
        email:"",
        password:""
    });

    const handleInputChange = (event)=>{
        const {name, value}=event.target;
        setFormData({
            ...formData,
            [name]:value
        });
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:3000/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formData)
            });
            const result =await response.json();
            console.log(result);
            if (response.status === 401) {
                console.log("Unauthorized: Invalid credentials");
            } else if (result && result.user && result.user._id) {
                navigate("/dashboard");
                localStorage.setItem("token", result.token);
            } else {
                console.log("Unexpected response format or missing user information");
            }
        } catch(error){
            console.log(error.message);
        } finally {
            setFormData({
                email: "",
                password:""
            });
        }
    };

    return (
        <>
            <div>
                <div className="center-form">
                    <Form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleInputChange} />
                        </Form.Group>
                        <Button variant="dark" type="submit" className="w-100">
                            SignUp
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Login;

