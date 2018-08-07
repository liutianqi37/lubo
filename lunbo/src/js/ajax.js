function ajax(opt) {
    var type = opt.type || "get";
    var async = opt.async || true;
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var data = "";
    if (opt.data && type === "get") {
        data = "?" + opt.data;
    }
    xhr.open(type, opt.url + data, false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                opt.success && opt.success(json);
            } else {
                opt.error && opt.error();
            }
        }
    }
    var postData = null;
    if (type === 'post' && opt.data) {
        postData = encodeURL(opt.data);
        xhr.setRequestHeader('content-type', 'application/x-xxx-form-urlencoded');
    }
    xhr.send(postData);
}