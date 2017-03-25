/**
 * Created by jiang on 17-3-26.
 */

var pool = require('../conf/coon');
var user_model = require('../model/userModel');

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
    add : function (req, res) {
        pool.getConnection(function (err, connection) {
            if (err) {
                res.send("connect sql failed.");
            }
            var param = req.query || req.param;
            connection.query(user_model.insert, [param.name, param.age], function (err, result) {
                if (result) {
                    result = {
                        code: 200,
                        msg: 'success insert one message'
                    };
                }
                callback(res, result);
                connection.release();
            })
        })
    },

    select : function (req, res) {
        pool.getConnection(function (err, connection) {
            if (err) {
                res.send("connect sql failed.");
            }
            var param = req.query || req.param;
            connection.query(user_model.selectByName, param.name, function (err, result) {
                if (result) {
                    if(!result.length) return res.send("no message");
                    result.forEach(function (value, index) {
                        console.log(index, value);
                        userInfo = {
                            name: value.name,
                            age: value.age
                        };
                        result.splice(index,1,userInfo);
                    });
                }
                callback(res, result);
                connection.release();
            })
        })
    },

    delete : function (req, res) {
        pool.getConnection(function (err, connection) {
            if (err) {
                res.send("connect sql failed.");
            }
            var param = req.query || req.param;
            connection.query(user_model.delete, param.name, function (err, result) {
                if (result) {
                    result = {
                        code: 200,
                        msg: 'delete success.'
                    };
                }
                callback(res, result);
                connection.release();
            })
        })
    }
};
