import {
  GET_PREFECTURES_STARTED,
  GET_PREFECTURES_COMPLETED,
  GET_PREFECTURES_FAILED
} from "../actions/prefecture.action";

const DEFAULT_STATE = {
  loading: false,
  error: null,
  data: {},
};

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case GET_PREFECTURES_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_PREFECTURES_COMPLETED:
      const updatedData = { ...state.data }
      payload.data.forEach(({ prefCode: code, prefName: name }) => {
        updatedData[code] = { name };
      });

      return {
        ...state,
        loading: false,
        error: null,
        data: updatedData,
      };

    case GET_PREFECTURES_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    default:
      return state;
  }
}
