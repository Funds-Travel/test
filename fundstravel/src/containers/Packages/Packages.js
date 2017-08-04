import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPackages, getUser } from '../../actions/index';
import Package from '../../components/Package/Package';
import './Packages.css';

class Packages extends Component {
    componentWillMount() {
    }
    componentDidMount() {
      // console.log(this.props.user.user.data[0].goal)
      let goal = this.props.user.user.data[0].goal
      // // console.log(goal)
      this.props.getPackages(goal)
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
        <div className="allPackagesDiv row">
          {myPackages}
          </div>
      )
    }
}

function mapStateToProps({user, packet}) {
  return {
    packages: packet.packages,
    user: user
  }
}

const mapDispatchToProps = {
  getPackages,
  getUser
}
export default connect(mapStateToProps, mapDispatchToProps )(Packages)
