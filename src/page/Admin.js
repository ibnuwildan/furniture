import axios from "axios";
import React, { useEffect, useState } from "react";
import {Table, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

const AdminPage = () => {

const [dataBarang, setDataBarang ] = useState([]);


useEffect (() => {
  axios.get("http://localhost:8081/admin")
  .then(res => setDataBarang(res.data))
  .catch(err => console.log(err));
})

const handleDelete = async (id) => {
  alert("delete ?")
  try {
    await axios.delete("http://localhost:8081/barang/" + id)
  }catch(err){
    console.log(err)
  }
}

    return (      
  <div className="signup d-flex justify-content-center align-items-center bg-light py-5">
    <div className="bg-white rounded p-3 " style={{width: "80%"}}>
         <h1 className="fw-bold text-center py-5 bg-dark text-white"><span style={{color: "orange", fontSize: "5rem"}}>p</span>anto</h1>
         <Link to="/addproduct" className= "btn btn-success my-2">+ Tambah Barang</Link>
      <div className="admin-tbl py-2">
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
        {dataBarang.map((data, i) =>(
          <tr key={i}>
            <img src={data.gambar} alt={`Product ${i + 1}`} style={{ maxWidth: '100px' }} />
            <td>{data.nama_barang}</td>
            <td>{data.deskripsi}</td>
            <td>   
            <Link to= {`/updateproduct/${data.id}`}  className=" btn btn-primary ">Update</Link>{' '}
            <Button variant="danger" onClick={e => handleDelete(data.id)}> Delet</Button>{' '}
            </td>
          </tr>
        ))
        }
      </tbody>
    </Table>
    </div>  
  </div>
</div>
    )
}

export default AdminPage