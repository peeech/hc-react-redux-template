import { NEW_LIST_ENTRY, UPDATE_ENTRY_STATUS, ADD_TO_DATA } from '../ducks/data';
import { INIT_UI } from '../ducks/ui';
import { putEntry, getAllEntries } from '../hc_api/hc_api';

const apiMiddleware = ( {dispatch} ) => next => action => {
    switch (action.type) {
        case INIT_UI:
            getAllEntries()
                // on receive emit ADD_TO_DATA 
                .then(r => {
                    dispatch({
                        type: ADD_TO_DATA, 
                        payload: r.map((e, i) => {return {entryID: i, text:e.text, status: 2}})
                    })
                })
                // Catch any errors 
                .catch(e => console.log(e));        
            
            return next(action);

        case NEW_LIST_ENTRY:
            // Reject empty string
            if (!action.payload.text) return;
            
            // Send API Call
            putEntry({text: action.payload.text})
                // Once putEntry is succesful update its status as saved
                .then(r => {
                    // This timeout is here to simulate network delay :-)
                    setTimeout(() => {
                        dispatch({
                            type: UPDATE_ENTRY_STATUS, 
                            payload: {
                                entryID: action.payload.entryID, 
                                status: 2
                            }
                        })
                    },500);
                })       
                // Catch any errors   
                .catch(e => {
                    console.log(e);
                    // This timeout is here to simulate network delay :-)
                    setTimeout(() => {
                        dispatch({
                            type: UPDATE_ENTRY_STATUS, 
                            payload: {
                                entryID: action.payload.entryID, 
                                status: 0
                            }
                        })
                    },500);
                });        

            // Alter entry status to Sent
            action.payload.status = 1;

            // Explicitly pass action down the redux flow
            return next(action);

        default:
            return next(action);
    }
}

export default apiMiddleware;