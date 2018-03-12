import * as actionTypes from './actionTypes';
import axios from './../../axiosFirebase';

export const initApp = () => {
    return {
        type: actionTypes.INIT_APP,
    };
};

export const fethcDetailsSuccess = (data) => {
    return {
        type: actionTypes.FECTH_DETAILS_SUCCESS,
        data: data
    };
};

export const fethcDetailsFailed = (error) => {
    return {
        type: actionTypes.FECTH_DETAILS_FAILED,
        error: error
    };
};

export const showModal = () => {
    return {
        type: actionTypes.SHOW_MODAL
        
    };
};

export const closeModal = () => {
    return {
        type: actionTypes.CLOSE_MODAL
    };
};

export const fetchsingleUserDetail = ( id ) => {
    return {
        type: actionTypes.FETCH_SINGLE_USER_DETAILS,
        id : id
    };
};

export const updateSingleUserDetail = ( id , userInputData ) => {
    return {
        type: actionTypes.UPDATE_SINGLE_USER_DETAILS,
        id: id,
        userInputData : userInputData
    };
};

export const fetchDetails = () => {
    return dispatch => {
        dispatch(initApp());
        axios.get('/users.json')
            .then( res => {
                const fetchedDetails = [];
                for ( let key in res.data ) {
                    fetchedDetails.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fethcDetailsSuccess(fetchedDetails));
            } )
            .catch( error => {
                dispatch(fethcDetailsFailed(error));
            } );
    };
};