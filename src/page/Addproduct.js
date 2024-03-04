import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const [file, setFile] = useState("")
    const [namaBarang, setNamaBarang] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const navigate = useNavigate()

    const upload = () => {

      if (!file || !namaBarang || !deskripsi) {
        alert("Harap isi semua data!");
        return;
      }

      const formData = new FormData()
      formData.append("file", file);
      formData.append("nama_barang", namaBarang);
      formData.append("deskripsi", deskripsi);
      
      axios.post("http://localhost:8081/addproduct", formData)
      .then((response) => {
        console.log(response)
        alert("successs ALHAMDULILLAH")
        navigate("/admin")
      })
      .catch(er => console.log(er))
    }
    return (
        <div className="signup d-flex vh-100 justify-content-center align-items-center bg-light">
        <div className="bg-white rounded p-3 " style={{width: "80%"}}>
         <h1 className="fw-bold text-center py-5 bg-dark text-white"><span style={{color: "orange", fontSize: "5rem"}}>p</span>anto</h1>
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>Gambar</th>
      <th>Nama Barang</th>
      <th>Deskripsi</th>
      <th>Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>  
        <Form>
            <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])} />
        </Form>
        </td>
      <td>
      <Form.Select onChange={(e) => setNamaBarang(e.target.value)}>
        <option></option>
        <option>Bed</option>
        <option>Chair</option>
        <option>Sofa</option>
      </Form.Select>
      </td>
      <td>
      <Form>
            <Form.Control type="text" onChange={(e) => setDeskripsi(e.target.value)}/>
        </Form>
      </td>
      <td>   
        <Button variant="success" onClick={upload} >Tambahkan</Button>{' '}</td>
    </tr> 
  </tbody>
</Table>
        </div>

    </div>
    )
}

export default AddProduct