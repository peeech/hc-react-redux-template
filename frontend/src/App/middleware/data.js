import { COUNTER_CHANGE } from '../ducks/data';
import { UI_WARNING } from '../ducks/ui';

const dataMiddleware = ( { dispatch, getState } ) => next => action => {

    // See if numClicks is already 0 and emit warning
    if (action.type === COUNTER_CHANGE) {
        if ( action.payload && action.payload < 0 && getState().data.numClicks <= 0) {
            dispatch({type: UI_WARNING});
            return; // exit without calling next - stops propagating action all the way to the reducer
        }
    }
    return next(action);
}

export default dataMiddleware;