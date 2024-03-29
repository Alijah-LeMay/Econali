import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Carousel, Image } from 'react-bootstrap'
// My Components
import Loader from '../Loader'
import Message from '../Message'
// redux
import { useDispatch, useSelector } from 'react-redux'

import { listTopProducts } from '../../store/actions/productActions'
const ProductCarousel = () => {
  const dispatch = useDispatch()
  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            {/* <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} $({product.price})
              </h2>
            </Carousel.Caption> */}
            <Image src={product.image} alt={product.name} fluid />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
