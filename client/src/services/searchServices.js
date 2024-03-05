import * as request from ".././untils/request"



export const search = async (key, type = 'less') => {
    try {   
      const res = await request.get('search', {
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
  
  
  













