const prefecturesRequestStarted = () => ({
  type: "PREFECTURES_REQUEST_STARTED",
});

const prefecturesRequestCompleted = (data) => ({
  type: "PREFECTURES_REQUEST_COMPLETED",
  payload: { data },
});

const prefecturesRequestFailed = (error) => ({
  type: "PREFECTURES_REQUEST_FAILED",
  payload: { error },
});

export const fetchPrefectures = () => {
  const requestURL = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
  const headers = new Headers({
    'X-API-KEY': process.env.RESAS_API_KEY,
    'Content-Type': 'application/json;charset=UTF-8'
  });

  return (dispatch) => {
    dispatch(prefecturesRequestStarted());
    fetch(requestURL, {headers})
      .then(response => response.json())
      .then((data) => {
        if (data.statusCode && data.statusCode !== 200) {
          // 4xx client errors will have a 200 status in the response header but
          // include the error message & statusCode in the response body
          dispatch(prefecturesRequestFailed(`${data.statusCode} ${data.message}`));
        } else {
          dispatch(prefecturesRequestCompleted(data.result));
        }
      })
      .catch((error) => {
        dispatch(prefecturesRequestFailed(error.toString()));
      });
  };
};
