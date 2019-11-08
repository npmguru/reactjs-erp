import React,{Component} from 'react';
import {connect} from 'react-redux';
import {AUTH_SIGNOUT} from '../../persistence/types/userType';

class SignOut extends Component{


    componentDidMount(){
         alert("Logout")
         this.props.signOut();
         this.props.history.push('/signup');
    }
    
    render(){
        return(<div>
            Sign Out!!!
        </div>);
    }

  }

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch({ type: AUTH_SIGNOUT })
    }
} 
  

export default connect(null,mapDispatchToProps)(SignOut);