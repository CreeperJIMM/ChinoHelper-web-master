var discordlogin = async function () {
    let w = document.body.clientWidth / 3;
    let h = document.body.clientHeight / 3;
    window.open(
        "/login/discord",
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
        "login/google",
        "newwindow",
        "width=500,height=800,top=" +
        h +
        ", left=" +
        w +
        " toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no"
    );
}