var discordlogin = async function () {
    let w = document.body.clientWidth / 2.6;
    let h = document.body.clientHeight / 3;
    window.open(
        "/login/discord",
        "newwindow",
        "width=500,height=800,top=" +
        h +
        ", left=" +
        w +
        " toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no"
    );
}