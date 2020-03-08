const API_URL = "https://opendata.resas-portal.go.jp/api/v1";

export const apiRequest = (path, config = {}) => {
  return () => {
    const requestUrl = `${API_URL}${path}`;

    const defaultConfig = {
      headers: new Headers({
        "X-API-KEY": process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json;charset=UTF-8"
      })
    };

    return fetch(requestUrl, { ...defaultConfig, ...config });
  };
}
