import {  } from '../ducks/data';
import {  } from '../ducks/ui';

const dataMiddleware = ( { dispatch, getState } ) => next => action => {

    return next(action);
}

export default dataMiddleware;