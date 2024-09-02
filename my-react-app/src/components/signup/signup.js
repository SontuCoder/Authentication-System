import React, {useState} from 'react'
import { Button, Form} from 'react-bootstrap';
import "./signup.css";

const Signup = ()=> {
    const [formData, setFormData]= useState({
        name:"",
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
            const response = await fetch("http://localhost:3000/user/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formData)
            });
            const result =await response.json();
            console.log(result);
        } catch(error){
            console.log(error.message);
        } finally {
            setFormData({
                email: "",
                name: "",
                password:""
            });
        }
    };

    return (
        <>
            <div className="center-form">
                <Form>
                    <h1>
                        SignUp
                    </h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" name="name" placeholder="Enter Name" value={formData.name} onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleInputChange}/>
                    </Form.Group>
                    <Button variant="dark" type="submit" className="w-100" onClick={handleSubmit}>
                        SignUp
                    </Button>
                </Form>
            </div>

        </>
    );
};

export default Signup;

