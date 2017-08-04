import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPackages, getUser } from '../../actions/index';
import Packages from '../../containers/Packages/Packages';
// import Filters from './Filters';
// import InputFilter from './InputFilter';
class OurFilter extends Component {
  componentWillMount() {
    this.props.getPackages()
  }
  constructor() {
    super();
    this.state = {
      search: 'Level Up',
      cityFilter: ""
    }
  }
  updateSerach(event) {
    this.setState({search: event.target.value.substr(0, 20)});
  }
  render() {
    console.log(this.props.packet)
    let myPackages = this.props.packages
    let packageArray = [];
    if (this.state.cityFilter) {
      let theFilter = this.state.cityFilter;
      myPackages = myPackages.filter(function(onePackage) {

        if (onePackage.total_price <= theFilter) {
        packageArray.push(onePackage);
      }
      console.log(packageArray)
      return packageArray;
      }
        // onePackage.city_country.includes(this.state.cityFilter))
      )
      console.log(packageArray)
      return packageArray
    }
    return (
      <div>
        <input type="text"
          placeholder="Search by Price"
          value={this.state.cityFilter}
          onChange={(e) => this.setState({cityFilter: e.target.value})}/>
                <div className=" eachPackageDiv col s12 m12 l9">
        <div className="allPackagesDiv row">
        <Packages myPackages={packageArray} />
      </div>
    </div>
      </div>
    )
  }
}

// class OurFilter extends Component {
//   constructor(props) {
//     super(props);
//   this.state = {
//     filters: { total_price: '' },
//   }
// }
// componentWillMount() {
//   this.props.getPackages(3000)
// }
// componentDidMount() {
//   this.props.getPackages(3000)
// }
//   onFilterChange = ({ filters }) => {
//     this.setState({ filters });
//   }
//
//   render() {
//     console.log(this.props)
//     // let funds = { funds: 3000}
//     // let things;
//     //  this.props.getPackages(funds.funds)
//     //                 .then(response => {
//     //                   things = response
//     //                   console.log(response.value.data)
//     //                 });
//     // console.log(things)
//     const { filters } = this.state;
//     // const thePackages = this.props.packet.filter(({ total_price }) => (
//     //   total_price.includes(filters.total_price)
//     // ))
//     return (
//       <div>
//         <Filters onChange={this.onFilterChange}>
//           <InputFilter filterName="total_price" />
//         </Filters>
//       </div>
//
//     )
//   }
// }

function mapStateToProps({user, packet}) {
  return {
    user: user,
    packet: packet.packages
  }
}
const mapDispatchToProps = {
  getUser,
  getPackages
}

export default connect(mapStateToProps, mapDispatchToProps)(OurFilter)
