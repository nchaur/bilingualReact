import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

const ProductDetail = ({ product }) => {
  const { image, name, description } = product;
  return (
    <Col md="12" className="md-4">
      <Card>
        <CardImg top src={image} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
          <p>Hola como estas</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductDetail;
