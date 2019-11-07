import React, { Component } from 'react';
import { connect } from 'react-redux';


export default AuthComponent => {
  class CheckByAuthComponent extends Component {

    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (this.props.auth.authentication === null) {
        this.props.history.push('/signup');
      }
    }

    render() {
      return <AuthComponent {...this.props} />;
    }

  }

   const mapStateToProps = (state) => {
      return { auth: state.auth };
   }

  return connect(mapStateToProps)(CheckByAuthComponent);

};