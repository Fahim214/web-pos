import axios from 'axios'

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT" 
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const DETAIL_PRODUCT = 'DETAIL_PRODUCT'

export const getListProduct = () => {
    
    return (dispatch) => {

        // Loading
        dispatch({
            type: GET_LIST_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'GET',
            url: "http://localhost:3005/products",
            timeout: 120000
        })
        .then((res) => {
            
            dispatch({
                type: GET_LIST_PRODUCT,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })
        })
        .catch((err) => {
            
            dispatch({
                type: GET_LIST_PRODUCT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        })
    }
}


export const addProduct = (data) => {
    return (dispatch) => {

        // Loading
        dispatch({
            type: ADD_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'POST',
            url: "http://localhost:3005/products",
            timeout: 120000,
            data: data
        })
        .then((res) => {
            dispatch({
                type: ADD_PRODUCT,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })
        })
        .catch((err) => {
            dispatch({
                type: ADD_PRODUCT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        })
    }
}


export const deleteProduct = (id) => {
    console.log('masuk Action');
    return (dispatch) => {

        // Loading
        dispatch({
            type: DELETE_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'DELETE',
            url: "http://localhost:3005/products/"+id,
            timeout: 120000,
        })
        .then((res) => {
            console.log('berhasil' + res);
            dispatch({
                type: DELETE_PRODUCT,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })
        })
        .catch((err) => {
            console.log('gagal');
            dispatch({
                type: DELETE_PRODUCT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        })
    }
}

export const detailProduct = (data) => {
    return(dispatch) => {
        dispatch({
            type: DETAIL_PRODUCT,
            payload: {
                data: data
            }
        })
    }
}