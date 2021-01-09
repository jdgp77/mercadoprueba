import React, { Component } from 'react'
import InputQuery from '../../elements/InputQuery/InputQuery';
import Logo from '../../../images/Logo_ML@2x.png.png';
import './QueryBar.scss'
import Grid from '@material-ui/core/Grid';
import { Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setQueryValue } from '../../../redux/actions';

class QueryBar extends Component {
  constructor() {
    super();
    
    this.state = {
      value: '',
      redirectToQuetyPath: false,
    };
  }

  getQueryValue = (value) => {
    if (value !== this.state.value) {
      this.props.setQueryValue(value);
      this.setState({
        value: value,
        redirectToQuetyPath: true
      });
    }
  }
  
  render() {
    return <div className="ml-bk-query-bar" >
      <Grid container >
        <Grid item xs={2}>
          <Link to={'/'} ><img className="ml-logo" src={Logo} alt="¿Quieres participar?"/></Link>
        </Grid>
        <Grid item xs={9}>
          <InputQuery getQueryValue={this.getQueryValue} label="Nunca dejes de buscar" />
        </Grid>
      </Grid>
      { this.state.redirectToQuetyPath ? <Redirect to={'/item' + (this.state.value ? '?search=' + this.state.value : '')} /> : <></> }
    </div>
  }
}


QueryBar.propTypes = {
  setQueryValue: PropTypes.func.isRequired,
};
const mapDispatchToPropsActions = dispatch => ({
  setQueryValue: (value) => {
    return dispatch(setQueryValue(value))
  }
});
export default connect(null, mapDispatchToPropsActions)(QueryBar);
