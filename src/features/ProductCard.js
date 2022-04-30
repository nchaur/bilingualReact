import { Card, CardImg, CardImgOverlay, CardTitle, Button, Container, Row, Col } from "reactstrap";

const ProductCard = ({ product }) => {
  const { image, name } = product;
  const toggleProduct = () => {
    console.log("hi");
  };
  return (
    <>
      <Card onClick={() => toggleProduct()}>
        <CardImg width="100%" src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
      </Card>{" "}
      <Container>
        <Row>
          <Col>
            {" "}
            <Button className="btn btn-secondary">
              <i className="fa fa-heart" />{" "}
            </Button>
          </Col>
          <Col>
            <Button className="btn btn-secondary">
              {" "}
              <i className="fa fa-shopping-cart" />
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductCard;
