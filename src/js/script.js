$(function () {
    $.ajax({
        url: './api/list',
        dataType: 'json',
        success: function (res) {
            console.log(res);
            if (res.code === 0) {
                var str = "";
                res.data.forEach(function (file) {
                    str += `<ul>
                        <li><p><input type="radio">${title}</p><p>${title1}</p></li>
                        <li><p>${middle}</p><p>${middle1}</p></li>
                        <li><p>${middle2}</p><p>${middle3}</p></li>
                    </ul>`;
                });
                $('.main').html(str);
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
});
