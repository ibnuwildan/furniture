import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {

  const [namaBarang, setNamaBarang] = useState("")
  const [deskripsi, setDeskripsi] = useState("")
  const {id} = useParams()
  const navigate = useNavigate()

  function handleSubmit (event) {
    event.preventDefault()
    console.log({namaBarang,deskripsi});
    axios.put("http://localhost:8081/barang/" + id, {namaBarang, deskripsi})
    .then(res => { 
    setNamaBarang(res.data.nama_barang); 
    console.log(res)
    navigate("/admin")
    })
    .catch(err => console.log(err))
}


  return (
    <div className="signup d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="bg-white rounded p-3 " style={{ width: "50%" }}>
        <h1 className="fw-bold text-center py-5 bg-dark text-white"><span style={{ color: "orange", fontSize: "5rem" }}>p</span>anto</h1>
        <h2>Update Barang</h2>
        <Form onSubmit={handleSubmit}> 
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Gambar</Form.Label>
            <Form.Control type="file" name="file"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nama Barang</Form.Label>
            <Form.Select onChange={e => setNamaBarang(e.target.value)} >
        <option></option>
        <option>Bed</option>
        <option>Chair</option>
        <option>Sofa</option>
      </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control type="text" name="deskripsi"  onChange={e => setDeskripsi(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Barang
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProduct;
