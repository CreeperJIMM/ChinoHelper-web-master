function isMobileDevice() {
    const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
    let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
    return isMobileDevice
}
let menusetx = 1
let names = ""
$(document).ready(function () {
    $('#Nname').fadeIn("slow")
    $('#Nchoose').hide()
    $('#Nword').click(function () {
        navigator.vibrate(60);
        if (menusetx == 0) {
            menusetx = 1
            let s = document.getElementById('Nname').innerHTML
            $('#Nchoose').slideToggle(500);
            setTimeout(() => {
                let timer = setInterval(() => {
                    navigator.vibrate(20);
                    if (s.length <= 0) {
                        $('#Nname').fadeOut(600)
                        var box = document.querySelector('#Nword');
                        box.style = "width: auto;";
                        clearInterval(timer)
                    } else {
                        document.getElementById('Nname').innerHTML = s.substr(0, s.length - 1);
                        s = s.substr(0, s.length - 1);
                    };
                }, 100);
            }, 500);
        } else if (menusetx == 1) {
            menusetx = 0
            var box = document.querySelector('#Nword');
            box.style = "width: auto;";
            document.getElementById('Nname').innerHTML = names
            $('#Nname').fadeIn(500);
            $('#Nchoose').slideToggle("slow");
        }
    });
    names = "讀取中..."
    document.getElementById('Nword').innerHTML = '<dc><img id="user_avatar" src="https://i.imgur.com/UWlIo9E.png" title="Loading..." width="50" height="50" alien="rig"><b id="Nname" style="color: #6f6eeb;"></b></dc>';
    document.getElementById('Nchoose').innerHTML = `<font size="4" style="color: mediumspringgreen;">連接伺服器中</font>`
});
(async () => {
    try {
        var login = await iflogin()
        console.log("%c等一下！！！", 'color:red;background:gray;font-size:72px;font-weight:bold;')
        console.log("%c如果有人叫你在這裡貼上任何程式碼!! \n百分百是你被騙了!!", 'color:blue;background:darkseagreen;font-size:26px;font-weight:bold;')
        console.log("%c使用這個主控台均有可能讓惡意攻擊者使用 Self-XSS 的方式 \n來冒用你的身分並且竊取資訊!!", 'color:red;font-size:22px;font-weight:bold;')    
        if(!login) return document.getElementById('Nchoose').innerHTML = `<font size="3" style="color: mediumspringgreen;">連接伺服器失敗!</font>`;
        if(!login.ok) {
            var userdata = await getData(["username", "id", "avatar"]);
        }
    } catch (error) {
        return;
    }
    let url = new URL(document.URL)
    if(!userdata.ok) {
        if (userdata.message == "User_is_banned") {
            if (url.pathname === "/banned") return;
            document.location.href = '/banned'
        }
    }
    names = "Discord登入"
    var desc = `<a href="/sign" style="color: mediumspringgreen;">點我登入</a>`
    let user = '<dc><img id="user_avatar" src="https://i.imgur.com/UWlIo9E.png" title="Discord登入" width="50" height="50" alien="rig"><b id="Nname" style="color: #6f6eeb;"></b></dc>';
    if (userdata.data) {
        names = userdata.data.username
        user = `<dc> <img id="user_avatar" src="https://cdn.discordapp.com/avatars/${userdata.data.id}/${userdata.data.avatar}.png" title="${userdata.data.username}" width="50" height="50" alien="rig"><b id="Nname" style="color: #6f6eeb;"></b> </dc>`;
        desc = `|<a href="/login/discord" style="color: mediumspringgreen;">個人</a>|<a href="/login/logout" style="color: mediumspringgreen;">登出</a>|<br>|<a href="/login" style="color: mediumspringgreen;">登入狀態</a>|`
    };
    setTimeout(async() => {
        document.getElementById('Nword').innerHTML = user
        document.getElementById('Nchoose').innerHTML = desc
    }, 50);
    /*
    if(isMobileDevice()) {setTimeout(() => {
    document.getElementById('googleADs2').innerHTML = '<font size="4.8%"> <div id="GoogleADs2" style="display:flex;">我們需要廣告以維持經營。<br>請關閉您的廣告攔截程式。</div> </font>'}, 500);}else{
    setTimeout(() => {document.getElementById('googleADs2').innerHTML = '<font size="4.8%"> <div id="GoogleADs2" style="display:flex;">我們需要廣告以維持經營。<br>請關閉您的廣告攔截程式。</div> </font>';document.getElementById('googleADs1').innerHTML = '<font size="4.8%"> <div id="GoogleADs1">我們需要廣告以維持經營。<br>請關閉您的廣告攔截程式。</div> </font>'}, 300);}
    */
})()