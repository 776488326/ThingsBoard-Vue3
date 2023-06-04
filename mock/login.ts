import { login_url, sign_up_url } from '../src/api/api_url'
import { MockMethod } from 'vite-plugin-mock'
import type { Counter } from "../src/api/user/type"
import type { Success, Fail } from "../src/api/common_type"
import fs from "fs";
// #region 全局变量定义

const successTemplate = ( data : Object | null, success_response = {code: 200, message: "success"} ): Success => {
  const {code,message} = success_response;
  return {
    code,
    data,
    message
  }
}

const failTemplate = ( data : Object | null, fail_response = { code: 400, message: "fail" }): Fail => {
  const {code, message} = fail_response;
  return {
    code,
    data,
    message
  }
}

let counter: Counter[] | any = [
  {
    password: "admin",
    email: "admin",
    firstName: "feng",
    lastName: "liang"
  }
];
counter = fs.readFileSync("./user_data.json");
counter = JSON.parse(counter);
// #endregion

export default [
  {
    url: "/api" + login_url,
    method: 'post',
    response({ url, body, query, headers }) {
      const { userName, password } = body;
      body.isAuthenticated = userName=="admin"? true:false;
      if (counter.filter(item => item.email === userName && item.password === password).length) {
        return successTemplate(body, {code: 200, message: "登录成功"});
      } else {
        return failTemplate(body, {code: 401, message: "账号密码无效"});
      }
    }
  },
  {
    url: "/api" + sign_up_url,
    method: 'post',
    response({ body }) {
      const { firstName, lastName, password, email, } = body;
      if(counter.some(item=>item.email===email)){
        return failTemplate(null, {code: 400, message: "账号已注册"});
      }else{
        counter.push(body);
        fs.writeFileSync("./user_data.json", JSON.stringify(counter));
        return successTemplate({userName: email,password});
      }
    }
  },
] as MockMethod[]