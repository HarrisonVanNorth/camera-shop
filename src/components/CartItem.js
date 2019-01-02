import React from 'react';
import {Card, CardTitle, Row, Button } from 'reactstrap';

const CartItem = ({camera, _removeItem}) => {
  const _handleClick = () => {
    _removeItem(camera.id)
  }

  return (
          <Card className="border-0"color="warning">
          <Row>
          <CardTitle className="col-3">{camera.name}</CardTitle>
          <h6 className="col-3">${camera.price}</h6>
          <Button className="col-3" color="secondary" onClick={_handleClick}> Remove Item </Button>
          </Row>
          </Card>

  )
}

export default CartItem