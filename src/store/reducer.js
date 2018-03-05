import { combineReducers } from 'redux';
 
const count = ( state = 0, action )=>{

    switch(action.type){
        case 'ADD':
            return state + 1;
        case 'REDUCE' :  
            return state - 1;
        default :
            return state;
    }
}
const loginFlag = (isLogin = false,action)=>{
    switch(action.type){
        case 'CHANGE':
            isLogin = !isLogin
            break;
        default:
            return false;
    }
}
const rootReducers = combineReducers({count, loginFlag})
export default rootReducers;