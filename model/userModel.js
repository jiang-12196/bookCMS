/**
 * Created by jiang on 17-3-26.
 */
var user = {
    insert: 'INSERT INTO user(name, age) VALUES(?, ?)',
    update: 'UPDATE user SET name=?, age=? WHERE id=?',
    delete: 'DELETE FORM user WHERE name=?',
    selectByName: 'SELECT * FROM user WHERE name=?',
    queryById: 'SELECT * FROM user WHERE id=?',
    queryAll: 'SELECT * FROM user'
};

module.exports = user;