import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import Cookies from "js-cookie";
import {
  BASE_URL,
  AUTH_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  USER_INFO,
} from "./utils/constants";
import { compareDateWithCurrent, fromCurrentFarawayDate } from "./utils/utils";

export async function middleware(request, response) {
  const url = request.nextUrl.clone();

  let access_token = Cookies.get("access_token");
  let config = {};
  if (access_token != "" && access_token != undefined) {
    const expire_date = Cookies.get("expire_date");
    if (!compareDateWithCurrent(expire_date)) {
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
        Cookies.set("expire_date", fromCurrentFarawayDate(res.data.expires_in));
        access_token = res.data.access_token;
      });
  }
  
  // console.log("((((((((((((((((((((((((((((", url.pathname);
  // if (url.pathname === "/login") {
  //   const userInfo = Cookies.get(USER_INFO);
  //   if (userInfo != null && userInfo != undefined && userInfo != '') {
  //     url.pathname = "/app";
  //     return NextResponse.redirect(url);
  //   }
  // }

  if (url.pathname === "/") {
    url.pathname = "/login";
    const userInfo = Cookies.get(USER_INFO);
    if (userInfo != null && userInfo != undefined && userInfo != '') {
      url.pathname = "/app";
    }
    url.pathname = "/app";
    return NextResponse.redirect(url);
  }
}
