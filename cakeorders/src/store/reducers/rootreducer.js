import authReducer from './authreducer';
import orderReducer from './orderreducer';
import { combineReducers} from 'redux';

const rootReducer=combineReducers({
    auth:authReducer,
    order:orderReducer
});

export default rootReducer;