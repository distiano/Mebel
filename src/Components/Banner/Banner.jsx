import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './banner.css';
import bannerImage from '../../assets/images/Banner.png';
import kursiKategori from '../../assets/images/kursiKategori.png';
import mejaKategori from '../../assets/images/mejaKategori.png';
import lemariKategori from '../../assets/images/lemariKategori.png';
import { FaCircleArrowRight } from 'react-icons/fa6';
import dataBarang from '../../databarang.json';
import { Link } from 'react-router-dom';
import Product from '../Product';

const Banner = () => {
  return (
    <section>
      <Container fluid>
        <div className="banner">
          <img src={bannerImage} alt="" className="img-fluid rounded-3" />
        </div>
        <div className="d-flex justify-content-center">
          <input type="text" name="cari" placeholder="Cari" className="inputText px-3 rounded-3" />
        </div>
        <div className="mt-4 kategori">
          <h5>Pilih Kategori</h5>
          <div className="d-flex justify-content-evenly mt-4">
            <div className="kategoriItem shadow d-flex justify-content-center align-items-center flex-column">
              <img src={kursiKategori} alt="" className="img-fluid" />
              <h6>Kursi</h6>
            </div>
            <div className="kategoriItem shadow d-flex justify-content-center align-items-center flex-column">
              <img src={mejaKategori} alt="" className="img-fluid" />
              <h6>Meja</h6>
            </div>
            <div className="kategoriItem shadow d-flex justify-content-center align-items-center flex-column">
              <img src={mejaKategori} alt="" className="img-fluid" />
              <h6>Meja</h6>
            </div>
            <div className="kategoriItem shadow d-flex justify-content-center align-items-center flex-column">
              <img src={lemariKategori} alt="" className="img-fluid" />
              <h6>Lemari</h6>
            </div>
            <div className="kategoriItem shadow d-flex justify-content-center align-items-center flex-column">
              <FaCircleArrowRight className="icon mb-3" />
              <h6>Lainnya</h6>
            </div>
          </div>
        </div>
        <div className="kategori mt-5">
          <h5>Untuk Anda</h5>
          <Row className="mt-4">
            {dataBarang.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

// {dataBarang.map((dataBarang, index) => (
//   <Col xs={6} md={3} className="mb-5" key={index}>
//     <Link to="">
//       <Card className="shadow">
//         <Card.Img variant="top" src={dataBarang.image} className="imgCard img-fluid mx-auto " />
//         <Card.Body className="cardBody border">
//           <Card.Title>{dataBarang.namabarang}</Card.Title>
//           <Card.Text>
//             Rp. {dataBarang.harga}
//             <br />
//             {dataBarang.toko}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Link>
//   </Col>
// ))}
