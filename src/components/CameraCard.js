import React from 'react';
import ReactStars from 'react-stars'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Badge, Col } from 'reactstrap';

const CameraCard = ({camera, _addToCart}) => {
  
  const _handleClick = () => {
    _addToCart(camera.id)
  }


  let badge;
  if (camera.onSale === true){
    badge = <Badge color="success"> On Sale! </Badge>
  }

  return (
      <Card className="">
      {badge}
      <CardBody>
        <CardImg className="h-100 w-100" src={camera.picture} alt="Card image cap" />
        <CardTitle>{camera.name}</CardTitle>
        <CardSubtitle>${camera.price}</CardSubtitle>
        <ReactStars count={camera.rating} size={36} color1={'#ffd700'}/>
        <Button onClick={_handleClick}>Button</Button>
        </CardBody>
      </Card>
  )
}

export default CameraCard