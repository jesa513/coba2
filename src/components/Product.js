import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { price } = this.props.product;
    const active = !this.state.active;

    this.setState({
      active: active,
    });

    // Beritahu Komponen OrderForm untuk mengupdate total
    this.props.addTotal( active ? price : -price );
  }

  render() {
    const { name, price } = this.props.product;
    const { active } = this.state;

    return (
      <li className={active ? 'is-active' : ''} onClick={this.onClick}>
        {name}
        <span>Rp { price }</span>
      </li>
    );
  }
}
export default Product;