import React, { Component } from 'react'
import searchIcon from  '../../../images/icons/ic_Search@2x.png.png'
import './InputQuery.scss'

class InputQuery extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.getQueryValue(event.target.value);
    this.setState({ value: event.target.value });
  }

  render() {
    return <div className="ml-el-input-query" variant="outlined">
      <input placeholder={this.props.label} value={this.state.value} onChange={this.handleChange} ></input>
      <div className="ml-icon-query" >
        <img src={searchIcon} alt={'query'} />
      </div>
    </div>
  }
}

export default InputQuery;