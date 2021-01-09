import React, { Component } from 'react'
import Products from '../../blocks/Products/Products';
import BreadCrumbs from '../../elements/BreadCrumbs/BreadCrumbs';
import './Query.scss'

class Query extends Component {
  render() {
    
    return <>
      <div className="ml-main" >
        <div className="ml-page-query">
          <BreadCrumbs links={[{ link: '/', text: 'productos' }]}/>
          <Products/>
        </div>
      </div>
    </>
  }
}

export default Query;