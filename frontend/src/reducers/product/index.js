import {
  GET_LIST_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  DETAIL_PRODUCT
} from "../../actions/ProductAction";

const initialState = {
  getListProductResult: false,
  getListProductLoading: false,
  getListProductError: false,

  addProductResult: false,
  addProductLoading: false,
  addProductError: false,

  deleteProductResult: false,
  deleteProductLoading: false,
  deleteProductError: false,

  detailProductResult: false
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        getListProductResult: action.payload.data,
        getListProductLoading: action.payload.loading,
        getListProductError: action.payload.errorMessage,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        addProductResult: action.payload.data,
        addProductLoading: action.payload.loading,
        addProductError: action.payload.errorMessage,
      };

    case DELETE_PRODUCT:
      console.log("masuk reducers", action);
      return {
        ...state,
        deleteProductResult: action.payload.data,
        deleteProductLoading: action.payload.loading,
        deleteProductError: action.payload.errorMessage,
      };

      case DETAIL_PRODUCT:
        return{
          ...state,
          detailProductResult: action.payload.data
        }
    default:
      return state;
  }
};

export default product;
