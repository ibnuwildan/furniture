import React from "react";
import { useState } from "react";
import {Button, Container, Form, InputGroup, Alert} from 'react-bootstrap';
import Swal from "sweetalert2";
// import Validation from "./SignupValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

const Signup = () => {

      const [name, setName] =useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      // const [errors,setErrors] = useState({})
      // const [showError, setShowError] = useState(false);
      const navigate = useNavigate()
    
   
      const handleSubmit = (event)  => {
        event.preventDefault();
        if(!name || !email || !password ) {
          // setErrors("isi data dengan lengkap")
          // setShowError(true);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Isi Data Dengan Lengkap !"
          });
          return
        }

            axios.post("http://localhost:8081/signup", {name, email, password})
            .then( res => {
              console.log(res)
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Sign Up Success",
                showConfirmButton: false,
                timer: 2300
              });
                navigate("/login")
            })
            .catch( err => console.log(err))
      }

    return(
      <div className="signup d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="bg-white rounded p-3 " style={{width: "30%"}}>
       <h1 className="fw-bold text-center py-5 bg-dark text-white"><span style={{color: "orange", fontSize: "5rem"}}>p</span>anto</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="my-4" controlId="formBasicEmail">
        {/* <Form.Label>Name</Form.Label>       */}
      <Form.Control type="text"  name="name" placeholder="Name" onChange={e => setName(e.target.value)}/>
       
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Button className="w-100 my-3" variant="warning" type="submit">
        Signup
      </Button>
      <Form.Text>
        <p className="pt-3"> Sudah memiliki akun ? <a href="/login">Login</a></p>
      </Form.Text>
    </Form>
        </div>
        </div>
    )
}

export default Signup;