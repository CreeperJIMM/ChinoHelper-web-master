(async() => {
    var cookieToast = document.getElementById('cookieToast');
})()
var showCookieToast = async function() {
    var toast = new bootstrap.Toast(cookieToast);
    toast.show()
}