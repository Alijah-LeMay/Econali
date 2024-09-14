import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CopyRight } from '../Assets/Constants'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>{<CopyRight />}</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
