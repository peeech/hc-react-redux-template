// That's where all the Types definitions and their reducers live

// Types
export const INIT_UI = '[UI] Init UI';

// Initial state of store.ui (see reducers.js)
let INIT_UI_STATE = {
    loading: false
};

const uiReducer = (state = INIT_UI_STATE, action) => {
    switch (action.type) {
        case INIT_UI:
            // Do nothing as an api middleware already consumed this message
            return {...state};
        default:
            return state;
    }
}

export default uiReducer;