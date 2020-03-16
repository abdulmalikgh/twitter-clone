import React, { Component } from 'react'
import { connect } from 'react-redux';
import Dashboard from '../component/Dashboard'
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch( handleInitialData() )    
  }
  render() {
    return (
      <div>
        {
          this.props.loading === true ? null:
          <Dashboard />
        }
      </div>
    )
  }
}
function mapStateToProps({ authedUser }){
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
