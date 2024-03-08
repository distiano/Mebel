import './search.css';
import { Col, Container, Form, Row, Card, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSquarePlus } from 'react-icons/fa6';
import Product from '../Product';
import dataProduk from '../../assets/data/databarang';

const Search = () => {
  return (
    <section>
      <Container fluid>
        <div className=" d-flex justify-content-center mt-3">
          <input type="text" name="cari" placeholder="Cari" className="inputText px-3 rounded-3" />
        </div>
        <div className="d-flex justify-content-between mt-3">
          <h6>Filters</h6>

          <div className="d-flex align-items-center ">
            <label htmlFor="formSelect">Urutkan:</label>
            <Form.Select size="sm" id="formSelect" className="formSelect ms-3">
              <option>Paling Sesuai</option>
              <option value="1">Terbaru</option>
              <option value="2">Harga Terendah</option>
              <option value="3">Harga Tertinggi</option>
            </Form.Select>
          </div>
        </div>
        <div className="">
          <Row>
            <Col md={3}>
              <div className="filters ">
                <h6>Kategori</h6>
                <div className="list-group mb-3">
                  <Link to="#" className="list-group-item ">
                    Kursi
                  </Link>
                  <Link to="#" className="list-group-item">
                    Meja
                  </Link>
                  <Link to="#" className="list-group-item">
                    Lemari
                  </Link>
                  <Link to="#" className="list-group-item">
                    Kasur
                  </Link>
                </div>
                <h6>Harga</h6>
              </div>
            </Col>
            <Col md={9} className="searchItem mt-3">
              <Row>
                {dataProduk.map((item, index) => (
                  <Product item={item} key={index} />
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Search;

// <Col xs={6} md={3} className="mb-4" key={index}>
//   <Link to={'/productdetail'}>
//     <Card className="">
//       <Card.Img variant="top" src={dataBarang.image} className="imgCard img-fluid mx-auto " />
//       <Card.Body className="cardBody border">
//         <Card.Title>{dataBarang.namabarang}</Card.Title>
//         <Card.Text>
//           <div>Rp. {dataBarang.harga}</div>
//           <div>{dataBarang.toko}</div>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   </Link>
// </Col>
