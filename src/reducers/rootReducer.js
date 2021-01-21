import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const initialState = {
    viewUserEmail: '',
    viewUserAuthToken: '',
    viewUserId: null,
    isLogged: false,
    loading: false,
    viewUserPtId: null,
    viewUserPtToken: '',
    error: null,
    count: 0
}

function rootReducer( state = initialState, action){

    switch(action.type) {
        case "MAKE_REQUEST":
            return {...state, loading: true}
        case "LOGIN_VIEW_USER":
            return {...state, loading: false, isLogged: true, viewUserEmail: action.payload.viewUserEmail, viewUserAuthToken: action.payload.viewUserAuth, viewUserId: action.payload.viewUserId}
        case "GET_USER":
            return { ...state, loading: false, user: action.payload }
        case "ERROR":
            return { ...state, loading: false, error: action.payload.error }
        case "ADD_PT":
            return { ...state, loading: false, viewUserPtId: action.payload.ptId, viewUserPtToken: action.payload.ptToken}
        default:
            return state;
    }

}

const persistConfig = {
    key: 'root',
    storage
}

export default persistReducer(persistConfig, rootReducer);