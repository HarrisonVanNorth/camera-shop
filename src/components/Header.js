import React from 'react';
import { Navbar, NavbarBrand, ButtonGroup,Button, InputGroup,InputGroupAddon,Input,} from 'reactstrap';

class Header extends React.Component {


    _onRadioBtnClick = (target) => {
    this.props._category(target)
  }

  _onChange = ({target}) => {
    this.props._filterName(target.value)
  }
      
  render(){ 
    return (
      <Navbar color="dark" light expand="md">
      <NavbarBrand className="text-white">Camera Store</NavbarBrand>
      <ButtonGroup>
      <Button color="primary" name="category" onClick={() => this._onRadioBtnClick(1)}>All</Button>
      <Button color="primary" name="category" onClick={() => this._onRadioBtnClick(2)}>Sale</Button>
      
      </ButtonGroup>
      <InputGroup>
      <Input type="text" className="form-control" name="name" onChange={this._onChange} placeholder="Search by Title" />
      <InputGroupAddon addonType="append"><Button color="secondary">Search</Button></InputGroupAddon>
      </InputGroup>
      </Navbar>
      
      )
    }
}

export default Header