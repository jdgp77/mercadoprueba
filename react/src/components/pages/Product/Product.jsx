import React, { Component } from 'react'
import ProductBlk from '../../blocks/ProductBlk/ProductBlk'

import BreadCrumbs from '../../elements/BreadCrumbs/BreadCrumbs'
import './Product.scss'

class Product extends Component {
  render() {
    return <>
      <div className="ml-main" >
        <div className="ml-page-product">
          <BreadCrumbs links={[{ link: '/', text: 'producto' }]}/>
          <ProductBlk id={this.props.match.params.id} />
        </div>
      </div>
    </>
  }
}

export default Product;