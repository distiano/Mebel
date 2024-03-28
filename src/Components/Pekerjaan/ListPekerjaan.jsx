import { Col, Row } from 'react-bootstrap';
import '../Pekerjaan/pekerjaan.css';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import dataPekerjaan from '../../assets/data/datapekerjaan';

const ListPekerjaan = () => {
  return (
    <Col md={5} className="lowonganPekerjaan  overflow-auto">
      {dataPekerjaan.map((listPekerjaan, index) => (
        <Row key={index}>
          <Col>
            {/* <Link to={`/pekerjaan/${namapekerjaan}`}> */}
            <Link to={`/pekerjaan/${listPekerjaan.namapekerjaan}`}>
              <div className="listPekerjaan d-flex position-relative">
                <div className="me-3">
                  <img src={listPekerjaan.image} alt="" />
                </div>
                <div>
                  <h5>{listPekerjaan.namapekerjaan}</h5>
                  <h6>{listPekerjaan.namaperusahaan}</h6>
                  <small>
                    <MdOutlineLocationOn />
                    {listPekerjaan.lokasi}
                  </small>
                </div>
                <small className="position-absolute bottom-0 end-0 p-3">{listPekerjaan.lastupdate}</small>
              </div>
            </Link>
          </Col>
        </Row>
      ))}
    </Col>
  );
};

export default ListPekerjaan;
