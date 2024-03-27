import classNames from "classnames/bind";
import React, { useEffect, useState } from 'react'
import style from "./admin.module.scss"
import * as loginSevices from '../../services/loginServices'
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style)

function Login() {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    const [action, setAction ] = useState('')
    const [search, setSearch] = useState('')


  const buttonType = () => {
      if(userName.length > 4 && passWord.length > 5) {
        return 'submit'
      }
      else{
        return 'button'
      }
    }

    const fetchApi = async () => {
      const result = await loginSevices.login(userName, passWord)
      setSearch(result)
    }

   fetchApi()

    const submitForm = () => {    
      if(search == true){
        setAction('/')
      }
    }

    const handleChangePass =(e) => {
      setPassWord(e.target.value)
    }

    const handleChangeUser = (e) => {
      setUserName(e.target.value)
    }

    return ( 
        <div className={cx('login')}>
        <div className={cx("img")}>
            <img className={cx('img-thumb')} src="https://cdn.tgdd.vn/2022/10/banner/TGDD-540x270.png"></img>
        </div>

      <div className={cx("box")}>
        <form action={action} >
          <h3 className={cx('title')}>Đăng nhập với tư cách quản trị viên</h3>
          <div className={cx("ui divider")}></div>
          <div className={cx("form")}>
            <div className={cx("field")}>
              <label className={cx('key')}>Tên tài khoản</label>
              <input
                type="text"
                value={userName}
                onChange={handleChangeUser}
              />
            </div>
            <div className={cx("field")}>
              <label className={cx('key', 'key-1')}>Mật khẩu</label>
              <input
                type="password"
                value={passWord}
                onChange={handleChangePass}
              />
            </div>
            <button type={buttonType()} onClick={submitForm} className={cx("button")}>Đăng Nhập</button>
          </div>
        </form>
      </div> 
      </div>
     ); 
}

export default Login;