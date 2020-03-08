import { apiRequest } from "./api.action";

// Actions
export const GET_PREFECTURES_STARTED = "prefecture/GET_PREFECTURES_STARTED";
export const GET_PREFECTURES_COMPLETED = "prefecture/GET_PREFECTURES_COMPLETED";
export const GET_PREFECTURES_FAILED = "prefecture/GET_PREFECTURES_FAILED";

export const getPrefectures = () => {
  return (dispatch) => {
    dispatch({ type: GET_PREFECTURES_STARTED });

    dispatch(apiRequest("/prefectures"))
      .then(response => response.json())
      .then(({ statusCode, message, result }) => {
        if (statusCode && statusCode !== 200) {
          // 4xx client errors will have a 200 status in the response header but
          // include the error message & statusCode in the response body
          dispatch({
            type: GET_PREFECTURES_FAILED,
            payload: { error: `${statusCode}: ${message}` },
          });
        } else {
          dispatch({
            type: GET_PREFECTURES_COMPLETED,
            payload: { data: result },
          });
        }
      })
      .catch(error => {
        const errorString = error.toString();
        dispatch({
          type: GET_PREFECTURES_FAILED,
          payload: { errorString },
        });
      })
  };
};
