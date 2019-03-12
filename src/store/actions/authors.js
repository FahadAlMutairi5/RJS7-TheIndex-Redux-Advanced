import * as actionTypes from "./actionTypes";
import axios from "axios";


export const fetchAuthors = () => {
  return async dispatch => { 
    try {
      const res = await axios.get("https://the-index-api.herokuapp.com/api/authors/")
      const author = res.data;
      dispatch({
        type: actionTypes.FETCH_AUTHORS,
        payload: author
      })
    } catch (err) {
    	console.error(err)
    }
  };
};
export const filterAuthors = (query) => {
  return dispatch => {
    //This function gets called by Redux Thunk
      dispatch({
        type: actionTypes.FILTER_AUTHORS,
        payload: query
      })
  };
};