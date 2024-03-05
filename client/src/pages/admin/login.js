import classNames from "classnames/bind";
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import style from "./admin.module.scss"

const cx = classNames.bind(style)

function Login() {

  const initialValues = { username: "", password: "" };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
})

const onSubmit = (data) => {
    axios.post('http://localhost:3003/login', data).then((response) => {
        console.log(response)
        console.log(data)
      })
}


    return ( 
        <div className={cx('login')}>
        <div className={cx("img")}>
            <img className={cx('img-thumb')} src="https://cdn.tgdd.vn/2022/10/banner/TGDD-540x270.png"></img>
        </div>

      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} className={cx("box")}>
        <Form action="">
          <h3 className={cx('title')}>Đăng nhập với tư cách quản trị viên</h3>
          <div className={cx("ui divider")}></div>
          <div className={cx("form")}>
            <div className={cx("field")}>
              <label className={cx('key')}>Tên tài khoản</label>
              <Field
                type="text"
                name="username"
              />
            </div>
            <div className={cx("field")}>
              <label className={cx('key', 'key-1')}>Mật khẩu</label>
              <Field
                type="password"
                name="password"
              />
            </div>
            <button type="submit" className={cx("button")}>Đăng Nhập</button>
          </div>
        </Form>
      </Formik>
      </div>
     ); 
}

export default Login;