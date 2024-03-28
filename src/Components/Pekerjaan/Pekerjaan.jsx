import { Col, Container, Row, Form } from 'react-bootstrap';
import '../Pekerjaan/pekerjaan.css';
import ListPekerjaan from './ListPekerjaan';
import DetailPekerjaan from './DetailPekerjaan';

const Pekerjaan = () => {
  return (
    <Container>
      <div className=" d-flex justify-content-center mt-3">
        <input type="text" name="cari" placeholder="Cari" className="inputText px-3 rounded-3" />
      </div>
      <div className="d-flex align-items-center mt-2">
        <label htmlFor="formSelectFilter">Filter:</label>
        <Form.Select size="sm" id="formSelectFilter" className="formSelect ms-3">
          <option>Semua</option>
          <option value="1">Cari Jasa</option>
          <option value="2">Tawarkan Jasa</option>
          <option value="3"></option>
        </Form.Select>
        <Form.Select size="sm" id="formSelectLokasi" className="formSelect ms-3">
          <option>Lokasi</option>
          <option value="1">Terbaru</option>
          <option value="2">Harga Terendah</option>
          <option value="3">Harga Tertinggi</option>
        </Form.Select>
      </div>
      <Row className="mt-2 pekerjaan">
        <ListPekerjaan />
        <DetailPekerjaan />
      </Row>
    </Container>
  );
};

export default Pekerjaan;
