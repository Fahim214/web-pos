import axios from 'axios'

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT" 

export const getListProduct = () => {
    console.log('masuk Action');
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
            console.log('berhasil' + res);
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
            console.log('gagal');
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