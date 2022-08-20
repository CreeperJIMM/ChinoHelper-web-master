(async () => {
    let haslogin = await iflogin(true);
    if(haslogin.data) {
        document.location.href = "/login/status";
    }
})()

var discordlogin = async function () {
    let w = document.body.clientWidth / 3;
    let h = document.body.clientHeight / 3;
    window.open(
        "/api/discord",
        "newwindow",
        "width=500,height=810,top=" +
        h +
        ", left=" +
        w +
        " toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no"
    );
}
var googlelogin = async function () {
    let w = document.body.clientWidth / 3;
    let h = document.body.clientHeight / 3;
    window.open(
        "/api/google",
        "newwindow",
        "width=500,height=800,top=" +
        h +
        ", left=" +
        w +
        " toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no"
    );
}