let errorObj = { ok: false, data: null };
var baseURL = "https://api.chinohelper.xyz";
let headers = {
    'Content-Type':'application/x-www-form-urlencoded'
};
var cache = {
    iflogin: null,
    dc_data: null,
    dc_guilds: null,
    db_value: null,
    db_data: null
}

var iflogin = async (iscache) => {
    if(cache.iflogin && iscache) return cache.iflogin;
    try {
        let data = await (await fetch(`${baseURL}/user/dc/haslogin`, {
            method: "HEAD",
            credentials: 'include'
        }))
        if(data.status == 204 || data.status == 200) {
            cache.iflogin = {ok: true,data: true};
            return {ok: true,data: true};
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
var getAllData = async (email,iscache) => {
    if(cache.data && iscache) return cache.dc_data;
    let text = ''
    if(email) text = '?email=true'
    try {
        let data = await (await fetch(`${baseURL}/user/dc/data`+text, {
            method: "GET",
            credentials: 'include',
            headers: headers
        })).json()
        cache.dc_data = data;
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
var getGuilds = async (iscache) => {
    if(cache.dc_guilds && iscache) return cache.dc_guilds;
    try {
        let data = await (await fetch(`${baseURL}/user/dc/guilds`, {
            method: "GET",
            credentials: 'include',
            headers: headers
        })).json()
        cache.dc_guilds = data;
        return data
    } catch (error) {
        console.log(error)
        return errorObj;
    }
}
var getUserValue = async (iscache) => {
    if(cache.db_value && iscache) return cache.db_value;
    try {
        let data = await (await fetch(`${baseURL}/user/db/value`, {
            method: "GET",
            credentials: 'include',
            headers: headers
        })).json()
        cache.db_value = cache.db_value;
        return data
    } catch (error) {
        console.log(error)
        return errorObj;
    }
}
var getUserData = async (iscache) => {
    if(cache.db_data && iscache) return cache.db_data;
    try {
        let data = await (await fetch(`${baseURL}/user/db/data`, {
            method: "GET",
            credentials: 'include',
            headers: headers
        })).json()
        cache.dc_data = data;
        return data
    } catch (error) {
        console.log(error)
        return errorObj;
    }
}