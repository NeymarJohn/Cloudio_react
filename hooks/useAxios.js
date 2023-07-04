import axios from "axios";
import Cookies from "js-cookie";
import {
  BASE_URL,
  AUTH_URL,
  CLIENT_ID,
  CLIENT_SECRET,
} from "../utils/constants";
import { compareDateWithCurrent, fromCurrentFarawayDate } from "../utils/utils";

export const useAxios = () => {
  let access_token = Cookies.get("access_token");
  let config = {};
  let _axios = null;
  if (access_token != "" && access_token != undefined) {
    const expire_date = Cookies.get("expire_date");
    if (compareDateWithCurrent(expire_date)) {
      config = {
        baseURL: BASE_URL,
        headers: {
          access_token: access_token,
          client_id: "9e712726-9d33-437b-b4a6-47da4a86d64d",
        },
      };
      _axios = axios.create(config);
    } else {
      Cookies.remove("access_token");
      Cookies.remove("expire_date");
      axios
        .post(
          AUTH_URL,
          { grant_type: "client_credentials" },
          { auth: { username: CLIENT_ID, password: CLIENT_SECRET } },
          { headers: { "content-type": "application/x-www-form-urlencoded" } }
        )
        .then((res) => {
          Cookies.set("access_token", res.data.access_token);
          Cookies.set(
            "expire_date",
            fromCurrentFarawayDate(res.data.expires_in)
          );
          access_token = res.data.access_token;
          config = {
            baseURL: BASE_URL,
            headers: {
              access_token: res.data.access_token,
              client_id: "9e712726-9d33-437b-b4a6-47da4a86d64d",
            },
          };
          _axios = axios.create(config);
        });
    }
  } else {
    axios
      .post(
        AUTH_URL,
        { grant_type: "client_credentials" },
        { auth: { username: CLIENT_ID, password: CLIENT_SECRET } },
        { headers: { "content-type": "application/x-www-form-urlencoded" } }
      )
      .then((res) => {
        Cookies.set("access_token", res.data.access_token);
        Cookies.set(
          "expire_date",
          fromCurrentFarawayDate(res.data.expires_in)
        );
        access_token = res.data.access_token;
        config = {
          baseURL: BASE_URL,
          headers: {
            access_token: res.data.access_token,
            client_id: "9e712726-9d33-437b-b4a6-47da4a86d64d",
          },
        };
        
      });
  }

  _axios = axios.create(config);

  return {
    _axios,
    access_token,
  };
};

export default useAxios;
