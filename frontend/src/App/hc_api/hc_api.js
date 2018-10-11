// This file contains wrapper fuhnctions to all the functions exposed by Holochain server API

/**
 * Helper function for POST requests to Holochain server
 * @param  {string} endpoint - holochain's zome API address
 * @param  {Object|string} [data] - Object of data that will be sent with the request in request's body
 * @return {Promise} Promise of a fetched result
 */
const fetchPOST = (endpoint, data) => {
    data = data || "";
    return fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}


/**
 * Get all list elements from DHT
 * @return {Promise} Promise of a fetched result in a form of an array of all the list elements
 */
export const getAllEntries = () => {
    return fetchPOST('/fn/sampleZome/getAllEntries').then(r => r.json());
}

/**
 * Commit list element as an entry into the DHT
 * @param {Object} obj - List element in a form of Object {'text': 'data'}
 * @return {Promise} Promise of a fetched result in a form of an array of all the entries
 */
export const putEntry = (obj) => {
    return fetchPOST('/fn/sampleZome/listEntryCreate', obj).then(r => r.json());
}