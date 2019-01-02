import React from 'react';
import {Col} from 'reactstrap';
import CameraCard from './CameraCard';

const CameraList = ({cameras, _addToCart}) => {
  const Camera = cameras.map(listItem => <CameraCard key={listItem.id} camera={listItem} _addToCart={_addToCart} />)

  return (
      <Col className="">
      {Camera}
      </Col>
  )
}

export default CameraList