import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPackages } from '../../actions/index';

import Package from '../../components/Package/Package';
import './Packages.css';

class Packages extends Component {
    componentWillMount() {
      this.props.getPackages()
    }
    componentWillReceiveProps(nextProps) {

      // console.log(this.props)
      // console.log(nextProps)
    }
    render() {
        const myPackages = this.props.packages.map(item => {
          return (
              <Package item={item} key={item.id} />
          )
        })

      return (
        <div className="allPackagesDiv">
          <span>{myPackages}</span>
          </div>
      )
    }
}


function mapStateToProps({user, packet}) {
  return {
    packages: packet.packages,
  }
}

const mapDispatchToProps = {
  getPackages
}
export default connect(mapStateToProps, mapDispatchToProps )(Packages)
