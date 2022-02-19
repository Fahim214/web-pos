import { GET_LIST_PRODUCT } from "../../actions/ProductAction"

const initialState = {
    getListProductResult: false,
    getListProductLoading: false,
    getListProductError: false
}

const product = (state = initialState, action) => {
    switch(action.type){
        case GET_LIST_PRODUCT:
            return{
                ...state,
                getListProductResult: action.payload.data,
                getListProductLoading: action.payload.loading,
                getListProductError: action.payload.errorMessage
            }
            default:
            return state
    }
}

export default product