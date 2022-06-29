import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import categoryImag01 from '../../../assets/images/category-01.png';
import categoryImag02 from '../../../assets/images/category-02.png';
import categoryImag03 from '../../../assets/images/category-03.png';
import categoryImag04 from '../../../assets/images/category-04.png';
import '../../../styles/category.css';

const categoryData = [
    {
        display: 'Fastfood',
        imgUrl: categoryImag01
    },
    {
        display: 'Pizza',
        imgUrl: categoryImag02
    },
    {
        display: 'Asian Food',
        imgUrl: categoryImag03
    },
    {
        display: 'Row Meat',
        imgUrl: categoryImag04
    },
];

const Category = () => {
  return <Container>
    <Row>
        {
            categoryData.map((item, index) => (
                <Col lg='3' md='4' sm='6' key={index}>
                    <div className="category_item d-flex align-items-center gap-3">
                        <div className="category_img">
                            <img src={item.imgUrl} alt={item.display} />
                        </div>
                        <h6>{item.display}</h6>
                    </div>
                </Col>
            ))
        }
    </Row>
  </Container>
}

export default Category;