import { useState } from "react";
import axios from "axios";

const initialRequestInfo = {
  error: null,
  data: null,
  loading: false,
};

export default function useApi(config) {
  const [requestInfo, setRequestInfo] = useState(initialRequestInfo);

  async function call() {
    setRequestInfo({
      ...initialRequestInfo,
      loading: true,
    });

    let response = null;
    try {
      response = await axios({
        baseURL: "https://apiturnoverbnb.herokuapp.com/api/v1",
        ...config,
      });
      setRequestInfo({
        ...initialRequestInfo,
        data: response.data.data,
      });
    } catch (error) {
      setRequestInfo({
        ...initialRequestInfo,
        error,
      });
    }

    if (config.onCompleted) {
      config.onCompleted(response);
    }
  }

  return [call, requestInfo];
}
