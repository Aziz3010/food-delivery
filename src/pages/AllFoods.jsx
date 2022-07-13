import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import products from '../assets/fake-data/products';
import ProductCart from '../components/UI/product-card/ProductCard';
import '../styles/all-foods.css';
import ReactPaginate from 'react-paginate';

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const searchedProducts = products.filter( (item) => {
    let filteredProduct = null; 
    if(item.title.toLowerCase().includes(searchTerm.toLowerCase()) ) {
      return filteredProduct = item;
    } else if(searchTerm === '') {
      return filteredProduct = products;
    }
    return filteredProduct;
  })
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProducts.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(searchedProducts.length / productPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }
  
  return (
    <>
      <Helmet title='Foods' >
        <CommonSection title='All Foods' />

        <section>
          <Container>
            <Row>
              
              {/* <Col lg='6' md='6' sm='6'> */}
              <Col lg='12' md='12' sm='12'>
                {/* <div className="search_widget w-50"> */}
                <div className="search_widget w-100">
                  <input value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} type="text" placeholder="I'm looking for..." />
                  <span><i className='ri-search-line'></i></span>
                </div>
              </Col>

              {/* <Col lg='6' md='6' sm='6' className='mb-4'>
                <div className="sorting_widget text-end">
                  <select className='w-50'>
                    <option>Default</option>
                    <option value="ascending">A-Z</option>
                    <option value="decending">Z-A</option>
                    <option value="high-price">High Price</option>
                    <option value="low-price">Low Price</option>
                  </select>
                </div>
              </Col> */}
              
              { displayPage.map((item, index)=> (
                  <Col lg='3' md='4' sm='6' key={index} className='mt-4' >
                    <ProductCart product={item} />
                  </Col>
              )) }

              {/*  Paginate  */}
              <div>
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={changePage}
                  previousLabel='Prev'
                  nextLabel='Next'
                  containerClassName='paginationBttns'
                  breakLabel='...'
                />
              </div>

            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default AllFoods;