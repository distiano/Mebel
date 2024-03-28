import { Col } from 'react-bootstrap';
import '../Pekerjaan/pekerjaan.css';
import { MdOutlineLocationOn } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import dataPekerjaan from '../../assets/data/datapekerjaan';

const DetailPekerjaan = () => {
  const { slug } = useParams();

  // const detailPekerjaan = dataPekerjaan.find((listPekerjaan) => listPekerjaan.namapekerjaan == slug);

  return (
    <Col>
      <div className="deskripsiPekerjaan border overflow-auto p-3 position-relative">
        <div>
          <h5 className="fw-bold">{slug}</h5>
          <h6>PPP</h6>
          <small>
            <MdOutlineLocationOn />
            PPPP
          </small>
          <p className="mt-3">PPPPP</p>
          <h6>Deskripsi Pekerjaan</h6>
          <p>PPPP</p>
          <div className="mt-3 position-absolute end-0 p-3">
            <button className="btnSimpan">Simpan</button>
            <button className="btnHubungi">Hubungi</button>
          </div>
          <small className="position-absolute top-0 end-0 p-3">PPPP</small>
        </div>
      </div>
    </Col>
  );
};

export default DetailPekerjaan;
