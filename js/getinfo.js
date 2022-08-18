let errorObj = { ok: false, data: null };
var baseURL = "https://api.chinohelper.xyz";
let headers = {
    'Content-Type':'application/x-www-form-urlencoded'
};
var haslogin = false;
var discorddata = null;

var iflogin = async () => {
    try {
        let data = await (await fetch(`${baseURL}/user/dc/haslogin`, {
            method: "HEAD",
            credentials: 'include'
        }))
        if(data.status == 204 || data.status == 200) {
            haslogin = true;
            return true;
        }else if(data.status == 401) {
            return errorObj;
        }
        return false;
    } catch (error) {
        console.log(error)
        return false;
    }
}
var getData = async (option) => {
    try {
        let data = await (await fetch(`${baseURL}/user/dc/data`, {
            method: "POST",
            credentials: 'include',
            headers: headers,
            body: new URLSearchParams({
                "filter": JSON.stringify(option)
            })
        })).json()
        return data;
    } catch (error) {
        console.log(error)
        return errorObj;
    }
}
var getAllData = async (email) => {
    if(discorddata) return discorddata;
    let text = ''
    if(email) text = '?email=true'
    try {
        let data = await (await fetch(`${baseURL}/user/dc/data`+text, {
            method: "GET",
            credentials: 'include',
            headers: headers
        })).json()
        discorddata = data;
        return data;
    } catch (error) {
        console.log(error)
        return errorObj;
    }
}
var getEmail = async () => {
    try {
        let data = await (await fetch(`${baseURL}/user/dc/email`, {
            method: "GET",
            credentials: 'include',
            headers: headers
        })).json()
        return data
    } catch (error) {
        console.log(error)
        return errorObj;
    }
}
var getUserValue = async () => {
    try {
        let data = await (await fetch(`${baseURL}/user/db/value`, {
            method: "GET",
            credentials: 'include',
            headers: headers
        })).json()
        return data
    } catch (error) {
        console.log(error)
        return errorObj;
    }
}
var getUserData = async () => {
    try {
        let data = await (await fetch(`${baseURL}/user/db/data`, {
            method: "GET",
            credentials: 'include',
            headers: headers
        })).json()
        return data
    } catch (error) {
        console.log(error)
        return errorObj;
    }
}