import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPackages, getUser } from '../../actions/index';
import Package from '../../components/Package/Package';
import './Packages.css';




class Packages extends Component {
    componentWillMount() {
      this.props.getPackages()
    }

   // This needs explanation from Brian !!
    componentWillReceiveProps(nextProps) {

     // console.log(this.props)
      // console.log(nextProps)
    }

   constructor() {
      super();
      this.state = {
        search: 'Level Up',
        cityFilter: ""
      }
    }

   updateSearch(event) {
      this.setState({search: event.target.value.substr(0, 20)});

   }

   // Line 49 async call to listen to the event (any input passed in)
    // Line 24 event is passed to state as state.cityFilter
    // Line 38 myPackages is assigned as props.packages
    // The "if" statement is taking the assigned state on line 24 and using a truthy with map method to pass through the object keys matching any input for a return.
    render() {
        let myPackages = this.props.packages
        if (this.state.cityFilter) {
          let theFilter = this.state.cityFilter;
          myPackages = myPackages.filter(function(onePackage) {

            if (onePackage.total_price <= theFilter)
            return onePackage;
          }
            // onePackage.city_country.includes(this.state.cityFilter))
          )
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
            value={this.state.cityFilter}
            onChange={(e) => this.setState({cityFilter: e.target.value})}/>
          {myPackages}
          </div>
      )
    }
}

// class Packages extends Component {
//     componentWillMount() {
//     }
//     componentDidMount() {
//       // console.log(this.props.user.user.data[0].goal)
//       let goal = this.props.user.user.data[0].goal
//       // // console.log(goal)
//       this.props.getPackages(goal)
//     }
//     componentWillReceiveProps(nextProps) {
//       // console.log(this.props)
//       // console.log(nextProps)
//     }
//     render() {
//         const myPackages = this.props.packages.map(item => {
//           return (
//               <Package item={item} key={item.id} />
//           )
//         })
//
//       return (
//         <div className="allPackagesDiv row">
//           {myPackages}
//           </div>
//       )
//     }
// }

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
