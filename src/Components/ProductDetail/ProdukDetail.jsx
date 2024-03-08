import { Col, Container, Row, Card } from 'react-bootstrap';
import kursiC from '../../assets/images/kursi C 1.png';
import { MdFavoriteBorder } from 'react-icons/md';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';
import './produkdetail.css';
import { useEffect } from 'react';
import dataProduk from '../../assets/data/databarang';

const ProductDetail = () => {
  const { slug } = useParams();

  const singleItem = dataProduk.find((item) => item.namabarang === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleItem]);
  return (
    <Container>
      <div className=" d-flex justify-content-center mt-3">
        <input type="text" name="cari" placeholder="Cari" className="inputText px-3 rounded-3" />
      </div>
      <Row className="text-center mt-3 ">
        <Col md={6} className="productImage mx-auto">
          <img src={singleItem.image} alt="" className="img-fluid " />
        </Col>
        <Col md={5} className="mx-auto">
          <Row>
            <Col xs={3} md={3} className="productImage">
              <img src={singleItem.image} alt="" className="img-fluid " />
            </Col>
            <Col xs={3} md={3} className="productImage">
              <img src={singleItem.image} alt="" className="img-fluid " />
            </Col>{' '}
            <Col xs={3} md={3} className="productImage">
              <img src={singleItem.image} alt="" className="img-fluid " />
            </Col>{' '}
            <Col xs={3} md={3} className="productImage">
              <img src={singleItem.image} alt="" className="img-fluid " />
            </Col>{' '}
            <Col xs={3} md={3} className="productImage">
              <img src={singleItem.image} alt="" className="img-fluid " />
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <div className="d-flex justify-content-between align-items-center productTitle">
        <h2>{singleItem.namabarang}</h2>
        <div className=" ">
          <img src="" alt="" className="img-fluid rounded-5" />
          <button>{singleItem.toko}</button>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3 productPrice">
        <h3>Rp. {singleItem.harga},-</h3>
        <div>
          <MdFavoriteBorder className="icon" />
          <IoChatbubbleEllipsesOutline className="icon mx-3" />
          <button>Beli</button>
        </div>
      </div>
      <hr />
      <div className="description my-5">
        <h4>Description</h4>
        <p>
          Merk : Napolly Lemari Pakaian Gantungan + Rak + Laci + Cermin Tipe : BCWM 858 G.LCK Warna : KRIBO (Krim Bronis) Ukuran Produk : 83 cm x 50 cm x 177 cm Ukuran Packing : 84,2 cm x 57,9 cm x 63 cm Bahan : Plastik Polyprepylene Berat
          : 25,5 Kg Kelebihan Produk : – Lemari pakaian + Cermin – Pintu Tebal, engsel kokoh, kaki lemari yang kokoh dan terdapat cermin yg luas – Memiliki rak dan gantungan baju serta laci penyimpanan yg luas dan kuat – Kunci untuk
          keamanan pada pintu dan lac i – Lemari dengan ukuran terbesar di kelasnya – Anti rayap, anti jamur, anti air – Mudah dirakit – Mudah dibersihkan – Motif urat kayu 3D – Kondisi tidak terakit – Perakitan Knock Down System (Bongkar
          Pasang) – Made in Indonesia
        </p>
      </div>
      <hr />
      <div className="produkSerupa my-5"></div>
    </Container>
  );
};

export default ProductDetail;
