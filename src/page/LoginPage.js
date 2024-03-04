  import React from "react";
  import { useState } from "react";
  import {Button, Container, Form} from 'react-bootstrap';
  import { useNavigate } from "react-router-dom";
  // import Validation from "./LoginValidation";
  import axios from "axios";
  import Swal from "sweetalert2";
  const Login = () => {

      // const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [errors,setErrors] = useState({})
      const navigate = useNavigate()

      const handleSubmit = (event)  => {
        event.preventDefault();
          axios.post("http://localhost:8081/login", {email, password})
          .then(res => {
            if(res.data === "success") {
              console.log(res.data)
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Login Success",
                showConfirmButton: false,
                timer: 2000
              });
              navigate("/")
            }else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Isi data dengan lengkap"
              });
            }
          })
          .catch (err => console.log(err))
        }
    
      return(
    <div className="login d-flex vh-100 justify-content-center align-items-center bg-light">
             <div className="bg-white rounded p-3 " style={{width: "30%"}}>
              <h1 className="fw-bold text-center py-5 bg-dark text-white"><span style={{color: "orange", fontSize: "5rem"}}>p</span>anto</h1>
              <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)}  />
        </Form.Group>
        <Form.Group>
        <Button className="w-100" variant="warning" type="Login">
          Submit
        </Button>
        </Form.Group>
        <Form.Text>
          <p className="pt-3">Belum memiliki akun ? <a href="/signup">Sign UP</a></p>
        </Form.Text>
      </Form>
      </Container>
      </div>
      </div>
      )
  }

  export default Login