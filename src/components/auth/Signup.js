import React, {Component} from  'react';
import {reduxForm, Field} from 'redux-form';
import {bindActionCreators } from 'redux'
import {compose} from 'redux';
import {connect} from 'react-redux';
import UserMiddleware from '../../persistence/actions/';


class Signup extends Component {
    
    onSubmit = (formProp) => {
        this.props.authSignUp(formProp, () => {
            this.props.history.push('/feature');
        });
       // console.log(formProp);

    }
 

    render(){
        console.log("############",this.props.getAuthData);
        if(this.props.getAuthData.message !== null && this.props.getAuthData.authentication === null){
            alert(this.props.getAuthData.message);
        }
        
        const {handleSubmit}  = this.props;

        console.dir(handleSubmit);
            
        return (
            <div>
           
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
             </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        authSignUp : UserMiddleware.userSignup
    },dispatch);

}


const mapStateToProps = state => {
    return {
       getAuthData : state.auth
    }

}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    reduxForm({ form: 'signup' })
)(Signup);