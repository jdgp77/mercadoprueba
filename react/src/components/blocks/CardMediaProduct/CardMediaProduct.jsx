import React, { Component } from 'react'
import './CardMediaProduct.scss'
import { formatMoney } from '../../../services/filter'

class CardMediaProduct extends Component {
  
  render() {
    return <div className="ml-bk-card-media-product" variant="outlined">
      <div className="ml-col-img">
        <img src={this.props.product.thumbnail} alt={this.props.product.title} />
      </div>
      <div className="ml-col-txt">
        <span className="ml-price" >{formatMoney(this.props.product.price, 0)}</span>
        <h2 className="ml-title" dangerouslySetInnerHTML={{ __html: this.props.product.title }}></h2>
      </div>
      <div className="ml-col-location">
        {this.props.product.city_name}
      </div>
    </div>
  }
}

export default CardMediaProduct;