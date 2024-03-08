import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { image, namabarang, harga, toko } = props.item;
  return (
    <Col xs={6} md={3} className="mb-4">
      <Link to={`/productdetail/${namabarang}`}>
        <Card className="">
          <Card.Img variant="top" src={image} className="imgCard img-fluid mx-auto " />
          <Card.Body className="cardBody border">
            <Card.Title>{namabarang}</Card.Title>
            <Card.Text>
              <div>Rp. {harga}</div>
              <div>{toko}</div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Product;
