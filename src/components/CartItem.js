import React from 'react';
import {ListGroupItem, ListGroupItemHeading, Badge, ListGroupItemText, Button } from 'reactstrap';

const CartItem = ({camera, _removeItem}) => {
  const _handleClick = () => {
    _removeItem(camera.id)
  }

  return (
          < ListGroupItem className = "" >
        <ListGroupItemHeading>{camera.name}</ListGroupItemHeading>
          <ListGroupItemText className="">
          <Badge pill>${camera.price}</Badge>
          </ListGroupItemText>
          <Button color="secondary" onClick={_handleClick}> Remove Item </Button>
          </ListGroupItem>

  )
}

export default CartItem