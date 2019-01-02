import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';

const CameraCard = ({camera, _addToCart}) => {
  
  const _handleClick = () => {
    _addToCart(camera.id)
  }


  let badge;
  if (camera.onSale === true){
    badge = <Badge color="danger"> On Sale! </Badge>
  }

  return (
      <Card className="">
        <CardImg className="h-100 w-100" src= {camera.picture} alt="Card image cap" />
        <CardBody>
          <CardTitle>{camera.name}</CardTitle>
          {badge}
          <CardSubtitle>${camera.price}</CardSubtitle>
          <Button onClick={_handleClick}>Button</Button>
        </CardBody>
      </Card>

  )
}

export default CameraCard