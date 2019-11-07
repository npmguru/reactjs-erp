import React, {Component} from  'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {UserMiddleware} from '../../persistence/actions/';


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

export default reduxForm({ form: 'signup' })(Signup);