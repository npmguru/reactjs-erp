import React, {Component} from  'react';
import {reduxForm, Field} from 'redux-form';
import {bindActionCreators } from 'redux'
import {compose} from 'redux';
import {connect} from 'react-redux';
import UserMiddleware from '../../persistence/actions/';


class Signup extends Component {
    
    onSubmit = (formProp) => {
        console.log(formProp);

    }
 

    render(){

        const {handleSubmit}  = this.props;

        console.dir(handleSubmit);
            
        return (
             <form onSubmit={handleSubmit(this.onSubmit)}>
                 <fieldset> 
                     <label>Email</label>
                     <Field name="email" type="text" component="input" autoComplete="none" />
                 </fieldset>
                 <fieldset>
                     <label>Password</label>
                     <Field name="password" type="password" component="input" autoComplete="none" />
                 </fieldset>
                 <button>Sign Up!</button>
             </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        authSignUp : UserMiddleware.userSignup
    },dispatch);

}


export default compose(
    connect(null,mapDispatchToProps),
    reduxForm({ form: 'signup' })
)(Signup);