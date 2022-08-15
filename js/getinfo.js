let errorObj = { ok: false, data: null }
let baseURL = "https://api.chinohelper.xyz"
let headers = {
    'Content-Type':'application/x-www-form-urlencoded'
}

var iflogin = async () => {
    try {
        let data = await (await fetch(`${baseURL}/user/dc/haslogin`, {
            method: "HEAD",
            credentials: 'include'
        }))
        if(data.status == 204 || data.status == 200) return true;
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
            body: {filter: option}
        })).json()
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