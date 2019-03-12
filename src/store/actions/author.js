import * as actionTypes from "./actionTypes";
import axios from "axios";


export const fetchAuthorDetail = (AuthorId) => {
  return async dispatch => { 
    try {
      const res = await axios.get(`https://the-index-api.herokuapp.com/api/authors/${AuthorId}`)
      const author = res.data;
      dispatch({
        type: actionTypes.FETCH_AUTHOR_DETAIL,
        payload: author
      })
    } catch (err) {
    	console.error(err)
    }
  };
};

