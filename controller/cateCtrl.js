/**
 * Created by jiang on 17-3-26.
 */
var pool = require('../conf/coon');
var cate_model = require('../model/cateModel');

var callback = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-1',
            msg : 'failed'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
  addTop: function (req, res) {
      pool.getConnection(function (err, connection) {
          if (err) {
              res.send("connect sql failed.");
          }

          var data = req.body['item[]'];
          console.log(data);
          if(typeof data === 'string') {
              connection.query(cate_model.insert, [data, 0, 0], function (err, result) {
                  if(err) {
                      return res.json({
                          code: '-1',
                          msg: 'insert error.'
                      })
                  }
                  if (result) {
                      result = {
                          code: 200,
                          msg: 'success insert one message'
                      };
                  }
                  callback(res, result);
                  connection.release();
              })
          } else {
              for (var i=0; i<data.length; i++) {
                  var name = data[i];
                  connection.query(cate_model.insert, [name, 0, 0], function (err, resule) {
                      if(err) {
                          return res.json({
                              code: '-1',
                              msg: 'insert error.'
                          })
                      }
                  });
                  if( i === (data.length-1)) {
                      var result = {
                          code: 200,
                          msg: 'success insert one message'
                      };
                      callback(res, result);
                      connection.release();
                  }
              }

          }

      })
  }
};