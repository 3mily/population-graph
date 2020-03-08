import { apiRequest } from "./api.action";

export const GET_POPULATION_STARTED = "population/GET_POPULATION_STARTED";
export const GET_POPULATION_COMPLETED = "population/GET_POPULATION_COMPLETED";
export const GET_POPULATION_FAILED = "population/GET_POPULATION_FAILED";

export const getPopulation = (prefCode) => {
  return (dispatch) => {
    dispatch({ type: GET_POPULATION_STARTED });

    const path = `/population/composition/perYear?cityCode=-&prefCode=${prefCode}`
    dispatch(apiRequest(path))
      .then(response => response.json())
      .then(({ statusCode, message, result }) => {
        if (statusCode && statusCode !== 200) {
          // 4xx client errors will have a 200 status in the response header but
          // include the error message & statusCode in the response body
          dispatch({
            type: GET_POPULATION_FAILED,
            payload: { error: `${statusCode} ${message}` },
          });

        } else {
          const data = {
            prefCode: prefCode,
            prefPopulationData: result.data.find((d) => {
              // Response includes multiple population data types, but
              // we only want the value for "総人口" (Total Population)
              return d.label === "総人口"
            }).data,
          };

          dispatch({
            type: GET_POPULATION_COMPLETED,
            payload: { data }
          });
        }
      })
      .catch(error => {
        const errorString = error.toString();
        dispatch({
          type: GET_POPULATION_FAILED,
          payload: { errorString },
        });
      });
  };
};
