const { query } = require('express');
const Course = require('../models/Course')


class HomeController {
     async search (req, res, next) {   //find key search 
      let query = {};
      let fiveArr
      if(req.query.key){
        query.$or = [
                {"name":{$regex:req.query.key}},
                {"slug":{$regex:req.query.key}}
        ]
      }
      let arrSearch = await Course.find(query)
      switch(req.query.type){
         case 'less':
            fiveArr = arrSearch.slice(0, 5);
            break;
         case 'more':
            fiveArr = arrSearch
         default:
            fiveArr = []
      }
      return res.status(200).send({
          data: fiveArr
       })
    }
}

module.exports = new HomeController();