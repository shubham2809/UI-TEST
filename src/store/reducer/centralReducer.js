import * as actionTypes from './../actions/actionTypes';


const initialState = {
userDetails: [ ],
    loading: false,
    error:   false,
    showModal: false
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INIT_APP: 
            return {
                    ...state,
                    loading: true
            }

        case actionTypes.FECTH_DETAILS_SUCCESS: 

        // Updating the array Immuatably
            let stateArray = [...state.userDetails];
            let actionArray = [...action.data];
            
            stateArray = actionArray.filter( dta => {
                return dta.id !== stateArray.id
            });
                return {
                    ...state,
                    loading: false,
                    userDetails: stateArray
                }

        case actionTypes.FECTH_DETAILS_FAILED: 
            return {
                ...state,
                loading: false,
                error: true
            }   
        case actionTypes.SHOW_MODAL:
        return {
            ...state,
            showModal: true
        }     

        case actionTypes.CLOSE_MODAL:
        return {
            ...state,
            showModal: !state.showModal
        }   

        case actionTypes.UPDATE_SINGLE_USER_DETAILS: 
        // Updating the array Immuatably
            const index = action.id;
            const allUserArray = [...state.userDetails];
            const {name , email , city , phone , website , companyName} = action.userInputData;
            
            if(name !== null){
                allUserArray[index].name = name;
            }
            if(email !== null){
                allUserArray[index].email = email;
            }
            if(city !== null){
                allUserArray[index].address.city = city;
            }
            if(phone !== null){
                allUserArray[index].phone = phone;
            }
            if(website !== null){
                allUserArray[index].website = website;
            }
            if(companyName !== null){
                allUserArray[index].company.name = companyName;
            }
            return {
                ...state,
                loading: false,
                showModal: !state.showModal,
                userDetails : allUserArray
            }  
            
            default:
            return state;
    }
}

export default reducer;