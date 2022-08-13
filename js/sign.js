let w = document.body.clientWidth / 2.6;
let h = document.body.clientHeight / 3;
var discordlogin = async function () {
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
let googleURL = "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.chinohelper.xyz%3Fid%3Dauth621153&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=877162245319-vkdpkj2v6shsu8ue0rlvb5jrgicinhuo.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.chinohelper.xyz&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow"
var googlelogin = async function() {
    window.open(
        googleURL,
        "newwindow",
        "width=500,height=800,top=" +
        h +
        ", left=" +
        w +
        " toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no"
    );
}