import React, { Component } from 'react'
import { Product as MerLibProduct } from '../../../services/api/mercadolibre';
import { Link } from "react-router-dom";
import './ProductBlk.scss'
import { formatMoney } from '../../../services/filter'

class ProductBlk extends Component {

  constructor() {
    super();
    this.state = {
      loading: false,
    }
  }

  componentDidMount() {
    let id = this.props.id;
    MerLibProduct(id)
      .then((resp) => {
        this.setState({
          ...this.state, ...{
            loading: true,
            product: {
              ...resp
            }
          }
        });
      });
  }

  render() {
    let priceFormat, arPriceFormat, priceFormatWithoutDecimals = '', priceFormatDecimals = '';
    if (this.state.loading) {
      priceFormat = formatMoney(this.state.product.price, 2);
      arPriceFormat = priceFormat.split(',');
      priceFormatWithoutDecimals = arPriceFormat[0];
      priceFormatDecimals = arPriceFormat[1];
    }
    return <div className="ml-bk-product">
      {
        (!this.state.loading) ? (
          <>... Cargando ...</>
        ) : (
          <>
            <div className="ml-col-principal">
              <img src={this.state.product.thumbnail} />
              <h3>Descripción del producto</h3>
              <div className="ml-sub-description">{this.state.product.description}</div>
            </div>
            <div className="ml-col-details">
              <div className="ml-sub-title">{this.state.product.warranty}</div>            
              <h1 dangerouslySetInnerHTML={{ __html: this.state.product.title }}></h1>
              <div className="ml-price">
                <span className="ml-price-without-decimals">{priceFormatWithoutDecimals}</span>
                <span className="ml-price-decimals" >{priceFormatDecimals}</span>
              </div>
              <a className="ml-price-button" href={this.state.product.linkbuy} >Comprar</a>
            </div>
              
          </>
        )
      }
    </div>
  }
}

export default ProductBlk;