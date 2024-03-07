import './search.css';
import { Col, Container, Form, Row, Card, ListGroup } from 'react-bootstrap';
import dataBarang from '../../databarang.json';
import kursiKategori from '../../assets/images/kursiKategori.png';
import mejaKategori from '../../assets/images/mejaKategori.png';
import lemariKategori from '../../assets/images/lemariKategori.png';
import kursiC from '../../assets/images/kursi C 1.png';

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
            <label for="lang" style={{ fontSize: '14px' }}>
              Urutkan:
            </label>
            <Form.Select size="sm" className="formSelect ms-3">
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
                <div>
                  <h6>Kategori</h6>
                  <div class="list-group mb-3">
                    <a href="#" class="list-group-item ">
                      Kursi
                    </a>
                    <a href="#" class="list-group-item">
                      Meja
                    </a>
                    <a href="#" class="list-group-item">
                      Lemari
                    </a>
                    <a href="#" class="list-group-item">
                      Kasur
                    </a>
                  </div>
                  <h6>Harga</h6>
                </div>
              </div>
            </Col>
            <Col md={9} className="searchItem mt-3">
              <Row>
                {dataBarang.map((dataBarang, i) => (
                  <Col xs={6} md={3} className="mb-4">
                    <a href="">
                      <Card className="">
                        <Card.Img variant="top" src={dataBarang.image} className="imgCard img-fluid mx-auto " />
                        <Card.Body className="cardBody border">
                          <Card.Title>{dataBarang.namabarang}</Card.Title>
                          <Card.Text>
                            <div>Rp. {dataBarang.harga}</div>
                            <div>{dataBarang.toko}</div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </a>
                  </Col>
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