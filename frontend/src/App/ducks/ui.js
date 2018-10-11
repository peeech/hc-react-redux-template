// That's where all the Types definitions and their reducers live

// Types
export const INIT_UI = '[UI] Init UI';
export const UI_WARNING = '[UI] Display UI warning';

// Initial state of store.ui (see reducers.js)
let INIT_UI_STATE = {
    loading: false
};

const uiReducer = (state = INIT_UI_STATE, action) => {
    switch (action.type) {
        case INIT_UI:
            // Do nothing as an api middleware already consumed this message
            return {...state};
        case UI_WARNING:
            console.log('Displaying UI Warning');
            return {...state};
        default:
            return state;
    }
}

export default uiReducer;