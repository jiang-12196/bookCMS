/**
 * Created by jiang on 17-3-26.
 */
$('.btn-primary').click(
    sub()
);

function sub() {
    var arr = [];
    $('.form-control').each(function () {
        var item = $(this).val();
        if($.trim(item)) {
            arr.push(item);
        }
    });
    $.ajax({
        url: '/cate/addTopCate',
        type: 'post',
        data: {item: arr},
        complete: function (data) {
            location.href = './ztree.html';
        }
    })
}
