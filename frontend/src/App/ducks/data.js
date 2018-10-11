// That's where all the action creators and their reducers live

export const COUNTER_CHANGE = '[Data] Changed Counter';
export const NEW_LIST_ENTRY = '[Data] Add new list entry';
export const ADD_TO_DATA = '[Data] Add multiple entries to store.data';
export const UPDATE_ENTRY_STATUS = '[Data] Update list entry status';

// Initial state of store.data (see reducers.js)
let INIT_DATA_STATE = {
    numClicks: 5,
    list: []
};

const dataReducer = (state = INIT_DATA_STATE, action) => {
    switch (action.type) {
        case COUNTER_CHANGE:
            if (!action.payload) return state;
            return {...state, numClicks: state.numClicks + action.payload};

        case NEW_LIST_ENTRY:
            if (!action.payload || !action.payload.text) return state;
            return {...state, list: [...state.list, action.payload]};

        case ADD_TO_DATA:
            if (!action.payload) return state;
            return {...state, list: state.list.concat(action.payload)};

        case UPDATE_ENTRY_STATUS:
            return {
                ...state, 
                list: state.list.map(e => {
                    e.status = (e.entryID === action.payload.entryID) ? action.payload.status : e.status;
                    console.log(e);
                    return e;
                })
            };

        default:
            return state;
    }
}

export default dataReducer;