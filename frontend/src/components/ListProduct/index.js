import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../actions/ProductAction";

function ListProduct() {
  const { getListProductResult, getListProductLoading, getListProductError } =
    useSelector((state) => state.ProductReducers);


  const dispatch = useDispatch();

  useEffect(() => {
    // Get API
    console.log("useEffect ");
    dispatch(getListProduct());
  }, [dispatch]);

  return(
      <div>
          {getListProductResult ? (
              getListProductResult.map((product) => {
                  return(
                      <p>{product.nama}</p>
                  )
              })
          ) : getListProductLoading ? (
              <p>Loading . . .</p>
          ) : (
              <p>{getListProductError ? getListProductError : "Data Kosong"}</p>
          )}
      </div>
  ) 
}

export default ListProduct;
