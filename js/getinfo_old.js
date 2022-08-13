let ApiURL = "https://api.chinohelper.xyz"
var getUser = async(id) => {
    try {
        let user2 =  await (await fetch('/api/user',{method: "POST",body: new URLSearchParams({
            "uid": id
        })})).json()
        return user2
    } catch (error) {
        console.log(error)
    }
}
var getData = async(option) => {
    try {
    if(option) {
        option= JSON.stringify(option)
        let user2 = await (await fetch('/api/verification',{method: "POST",body: new URLSearchParams({
            option,
        })
    })).json()
    return user2;
   }else{
       let user2 = await (await fetch('/api/verification',{method: "POST"})).json()
       return user2;
    }
    } catch (error) {
        console.log(error)
    }
}
var getGuild = async(id) => {
    try {
        let user2 =  await (await fetch('/api/guild',{method: "POST"
        })).json()
        return user2
    } catch (error) {
        console.log(error)
    }
}
var getGuilds = async(id) => {
    try {
        id= {id}
        id= JSON.stringify(id)
        let user2 =  await (await fetch('/api/guild/json',{method: "POST",body: new URLSearchParams({
            "uid": id
        })})).json()
        return user2
    } catch (error) {
        console.log(error)
    }
}
var getGuildChannel = async(id) => {
    try {
        let user2 =  await (await fetch('/api/guild/channel',{method: "POST",body: new URLSearchParams({
            "uid": id
        })})).json()
        return user2
    } catch (error) {
        console.log(error)
    }
}
var getdaily = async(token) => {
    try {
        let user2 =  await (await fetch('/api/daily',{method: "POST"
        })).json()
        return user2.daily
    } catch (error) {
        console.log(error)
    }
}
var getNsfwAD = async(id) => {
    try {
        let user2 =  await (await fetch('/api/adget',{method: "POST"
        })).json()
        return user2
    } catch (error) {
        console.log(error)
    }
}
var writeNsfwAD = async(url) => {
    try {
        let user2 =  await (await fetch('/api/adwrite',{method: "POST",body: new URLSearchParams({"url":url})
        })).json()
        return user2
    } catch (error) {
        console.log(error)
    }
}
var getpicture = async(img,nsfw,ad) => {
    try {
        let user2 =  await (await fetch('/api/picture',{method: "POST",body: new URLSearchParams({
            "img": img,
            "nsfw": nsfw,
            "ad":ad
        })})).json()
        return user2
    } catch (error) {
        console.log(error)
    }
}
function isMobileDevices() {
    const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
    let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
    return isMobileDevice
}
async function ReplaceAll(strOrg,strFind,strReplace){
    var index = 0;
    while(strOrg.indexOf(strFind,index) != -1){
    strOrg = strOrg.replace(strFind,strReplace);
    index = strOrg.indexOf(strFind,index);
    }
    return strOrg
}
function getCookie(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
function ifHasCode() {
    let url = new URL(document.documentURI);
    if( url.searchParams.has("__cf_chl_captcha_tk__") ) {
        return true;}else if(url.searchParams.has("__cf_chl_jschl_tk__")) {
            return true;
        }else{
           return false;
        }
}
function cookieToDict() {

    let cookies = document.cookie.split("; ");
    let cookieDict = {}

    cookies.map( cookieStr => { 
        let cookieKandV = cookieStr.split("=")
        let k = cookieKandV.shift()
        
        cookieDict[`${k}`] = cookieKandV.join("")
    })
    return decodeURIComponent(cookieDict.user_token)
}

var getGoogleData = async(token) => {
    try {
        let user2 =  await (await fetch('/api/login/google',{method: "POST",body: new URLSearchParams({"idtoken":token})})).json()
        return user2
    } catch (error) {
        console.log(error)
    }
}

function clearAllCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
}