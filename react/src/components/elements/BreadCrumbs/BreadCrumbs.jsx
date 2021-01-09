import React, { Component } from 'react'
import './BreadCrumbs.scss'
import { Link } from 'react-router-dom'

class BreadCrumbs extends Component {
  render() {
    let links = this.props.links ? this.props.links : [];
    return <div  className="ml-el-breadcrumbs">
      <Link className={'ml-first'} to={'/'} >Home</Link>{ links.map((link, index) => <span key={index} >&gt;<Link to={link.link} >{link.text}</Link></span>) }
    </div>
  }
}

export default BreadCrumbs;