import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios";

const BedPage = () => {
  const [dataBarang, setDataBarang ] = useState([]);


useEffect (() => {
  axios.get("http://localhost:8081/bed")
  .then(res => setDataBarang(res.data))
  .catch(err => console.log(err));
})

  return (
    <div className="bed bg-light">
      <div className="container">
        <div className="justify-content-center d-flex flex-wrap">
        {dataBarang.map((data, i) => (
            <Card style={{ width: '18rem',margin: "18px" }}>
              <Card.Img variant="top" src={data.gambar}   style={{ maxWidth: '18rem' }} />
              <Card.Body>
                <Card.Title>{data.nama_barang}</Card.Title>
                <Card.Text>{data.deskripsi}</Card.Text>
              </Card.Body>
            </Card>
          
        ))}
        </div>
      </div>
    </div>
  );
};

export default BedPage;
