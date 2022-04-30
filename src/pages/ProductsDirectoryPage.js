import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductDetail from "../features/ProductDetail";
import ProductsList from "../features/ProductsList";
import { selectProductById } from "../features/productsSlice";

const ProductsDirectoryPage = () => {
  const [campsiteId, setProductId] = useState(0);
  const selectedProduct = selectProductById(campsiteId);

  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <ProductsList setProductId={setProductId} />
        </Col>
        <Col sm="7" md="5">
          <ProductDetail product={selectedProduct} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsDirectoryPage;
