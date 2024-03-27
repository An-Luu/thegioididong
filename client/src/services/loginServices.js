import { URL_LOGIN_ADMIN } from '../untils/connectURL'
import Request from '../untils/request'


export const login = async (email, password) => {
    try {   
      const res = await Request.post_login(URL_LOGIN_ADMIN, `?email=${email}&password=${password}`)     
      return res.data
    }
     catch (error) {
     
     }
  }