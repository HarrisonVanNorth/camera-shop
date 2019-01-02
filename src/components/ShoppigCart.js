import React from 'react';
import { Card, CardTitle, Button} from 'reactstrap';
import CartItem from './CartItem'

const ShoppingCart = ({cartList, _removeItem}) => {
  console.log(cartList)
    const Item = cartList.map(listItem => <CartItem key={listItem.id} camera={listItem} _removeItem={_removeItem}/>)
    const Total = cartList.reduce((acc,item)=> {return acc + item.price},0)
  const Tax = Total * .086
  const SubTotal = Total + Tax



  return (
    <Card body inverse color = "warning" > 
    <CardTitle className="">Shopping Cart</CardTitle>
    <h6>Total ${Total}</h6>
    <h6>Tax ${Tax}</h6>
    <h6>Sub Total ${SubTotal}</h6>
    {Item}
    <Button className="mt-2" color="secondary"> Check Out </Button>
      </Card>

  )
}

export default ShoppingCart