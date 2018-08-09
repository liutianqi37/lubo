function require(element, cb) {
    console.log(element, cb())
}
require(['index'], function () {
    console.log(1)
})
function define(element, cb) {
    console.log(element, cb(4))
}
define(['swiper', 'jquery'], function (e) {
    console.log(e)
})