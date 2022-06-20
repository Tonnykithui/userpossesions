import * as reduxStore from 'redux';
import * as thunk from 'redux-thunk'
import reducers from '../reducers/index';

const store = reduxStore.createStore(
    reducers,
    {},
    reduxStore.applyMiddleware(thunk.default)
) 

export default store;