import { URL_GET_API } from '../untils/connectURL'
import Request from '../untils/request'

  
export const search = async (key, type = 'less') => {
    try {   
      const res = await Request.get(URL_GET_API,'search', {
        params : {
          key,
          type
        }
      })     
      return res.data
    }
     catch (error) {
     
     }
}
