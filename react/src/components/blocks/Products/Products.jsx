import React, { Component } from 'react'
import './Products.scss'
import CardMediaProduct from '../CardMediaProduct/CardMediaProduct';
import { Query as MerLibQuery } from '../../../services/api/mercadolibre';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class Products extends Component {

  constructor() {
    super();

    this.state = {
      loading: true,
      queryValue: 'tele',
      products: [],
      count: 0,
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state, ...{
        loading: false
      }
    });
  }

  query = (value) => {
    let newCount = this.state.count + 1;
    MerLibQuery(value, newCount)
      .then(resp => {
        if (resp.count_query === this.state.count) {
          this.setState({
            ...this.state, ...{
              loading: false,
                products: resp,
                count: resp.count_query
              }
            });
          }
        });
    this.setState({
      ...this.state, ...{
        loading: true,
        queryValue: value,
        count: newCount
      }
    });
  } 

  render() {
    if (this.state.queryValue != this.props.queryValue) {
      this.query(this.props.queryValue);
    }

    return <div className="ml-bk-products">
      {
        (this.state.loading ? <>... Cargando ...</> : this.state.products.map((product, index) => <Link key={index} to={'/item/' + product.id}><CardMediaProduct key={index} product={product}/></Link>))
      }
    </div>
  }
}


Products.propTypes = {
  queryValue: PropTypes.string,
};
const mapStateToProps = (state) => {
  return { queryValue: state.queryValue };
}
export default connect(mapStateToProps, null)(Products);
