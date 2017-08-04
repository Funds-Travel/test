import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Row, Input } from 'react-materialize';
import { addFunds, getUser } from '../../actions/index';

class Funds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.user.user.data[0].user_email,
      balance: this.props.user.user.data[0].balance,
      goal: this.props.user.user.data[0].goal,
      newBalance: '',
      newGoal: ''
  }
    this.addFunds = this.addFunds.bind(this);
  }
  addFunds(event) {
    const { email, newBalance, newGoal, goal, balance } = this.state;
    let theUser = [email, newBalance, newGoal, goal, balance];
    this.props.addFunds(theUser)
    // axios.post('/api/addFunds/' + email, {email, newBalance, newGoal, goal, balance })
    // axios.get('/api/user/' + email)
    //   .then(response => {
    //     this.setState({
    //       balance: response.data[0].balance,
    //       goal: response.data[0].goal
    //     })
    //   })
    }
    componentDidMount() {
      Modal.defaultProps = {
        actions: [<Button
        modal="close"
        className="submitButton"
        onClick={event => this.addFunds(event)}
        >
        {' '}Submit{' '}
      </Button>]
      }
    }
    // componentWillUpdate(nextProps, nextState) {
    //   if(nextProps != nextState) {
    //     this.props.getUser()
    //   }
    // }
  render() {
    // console.log(this.props)
    return (
      <div className="card-panel red lighten-3">
        <span className="white-text">
          <h4>Balance: {this.state.balance}</h4>
          <h4>Goal: {this.state.goal}</h4>
          <Modal header='Add Funds' trigger={
            <Button waves='light'>Add Funds</Button>
          }>
            <Row>
              <Input type="s" label="Add Funds" s={12}
              value={this.state.newBalance}
              onChange={event => this.setState({newBalance: event.target.value})}/>
              <Input type="s" label="Set New Goal" s={12}
              placeholder={this.state.goal}
              onChange={event => this.setState({newGoal: event.target.value})}/>
            </Row>
          </Modal>
        </span>
      </div>
    )
  }
}

function mapStateToProps({user}) {
  return {
    user: user,
  }
}
const mapDispatchToProps = {
  getUser,
  addFunds
}
export default connect(mapStateToProps, mapDispatchToProps)(Funds)
