import React from 'react';
import { connect } from 'react-redux';
import  RequireAuth  from './hoc/requireAuth';


const Feature =  (props) => {
     console.log(props)
    return(
        <h3>Welcome ! Feature Page {props.auth.message} {props.auth.message}</h3>
    )
}


const mapStateToProps = function(state) {
    return {
      auth: state.auth,
    }
}


connect(mapStateToProps)(Feature);
export default RequireAuth(Feature);






























