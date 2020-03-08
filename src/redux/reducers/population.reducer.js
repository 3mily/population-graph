import {
  GET_POPULATION_STARTED,
  GET_POPULATION_COMPLETED,
  GET_POPULATION_FAILED
} from "../actions/population.action";

const DEFAULT_STATE = {
  loading: false,
  error: null,
  data: {},
};

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case GET_POPULATION_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_POPULATION_COMPLETED:
      const { prefCode, prefPopulationData } = payload.data;
      const newData = { ...state.data, [prefCode]: prefPopulationData };
      return {
        ...state,
        data: newData,
        loading: false,
        error: null,
      }

    case GET_POPULATION_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    default:
      return state;
  }
}
