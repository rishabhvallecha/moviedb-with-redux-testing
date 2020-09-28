import movieReducer from './movieReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    movie: movieReducer,
    error: errorReducer
})

export default rootReducer;