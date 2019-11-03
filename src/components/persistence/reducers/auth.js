const INITIAL_STATE = {
    authentication:'',
    message:'' 

}

export default (state = {}, action) => {
    if (typeof state === 'undefined') {
        return INITIAL_STATE
    }
  return state;
}