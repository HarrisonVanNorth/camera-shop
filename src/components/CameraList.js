import React from 'react';
import {Container,Col} from 'reactstrap';
import CameraCard from './CameraCard';

const CameraList = ({cameras, _addToCart}) => {
  const Camera = cameras.map(listItem => <CameraCard key={listItem.id} camera={listItem} _addToCart={_addToCart} />)

  return (
        <Container className="mw-100">
      <Col>
      {Camera}
      </Col>
    </Container>
  )
}

export default CameraList