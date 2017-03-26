/**
 * Created by jiang on 17-3-26.
 */
var cate = {
    insert: 'INSERT INTO cate(name, pid, isdel) VALUES(?, ?, ?)',
    update: 'UPDATE cate SET name=? WHERE id=?',
    delete: 'UPDATE cate SET isdel=1 WHERE id=?',
    select: 'SELECT * FROM cate WHERE isdel=0'
};

module.exports = cate;