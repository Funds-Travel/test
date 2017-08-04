import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPackages } from '../../actions/index';
import Package from '../../components/Package/Package';
import './Packages.css';

class Packages extends Component {
    componentWillMount() {
      this.props.getPackages()
    }
   constructor() {
      super();
      this.state = {
        search: 'Level Up',
        priceFilter: ""
      }
    }
   updateSearch(event) {
      this.setState({search: event.target.value.substr(0, 20)});
   }
    render() {
        let myPackages = this.props.packages
        if (this.state.priceFilter) {
          let theFilter = this.state.priceFilter;
          myPackages = myPackages.filter(function(onePackage) {
            if (onePackage.total_price <= theFilter)
            return onePackage;
          })
        }
        myPackages = myPackages.map(item => {
          return (
              <Package item={item} key={item.id} />
          )
        })
     return (
        <div className="allPackagesDiv row">
          <input type="text"
            placeholder="Search by Price"
            value={this.state.priceFilter}
            onChange={(e) => this.setState({priceFilter: e.target.value})}/><br />
          {myPackages}
          </div>
      )
    }
}
function mapStateToProps({packet}) {
  return {
    packages: packet.packages
  }
}
const mapDispatchToProps = {
  getPackages
}
export default connect(mapStateToProps, mapDispatchToProps )(Packages)
