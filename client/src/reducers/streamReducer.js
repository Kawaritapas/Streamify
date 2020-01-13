import {FETCH_STREAM, FETCH_STREAMS, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
    console.log({...state, ..._.mapKeys(action.payload, 'id')});
    switch(action.type) {
        case FETCH_STREAM: return {...state, [action.payload.id]: action.payload}
        case CREATE_STREAM: return {...state, [action.payload.id]: action.payload}
        case EDIT_STREAM: return  {...state, [action.payload.id]: action.payload}
        case DELETE_STREAM: return _.omit(state, action.payload); // payload in this case is just id
        case FETCH_STREAMS: return {...state, ..._.mapKeys(action.payload, 'id')}
        default: return state;
    }
}