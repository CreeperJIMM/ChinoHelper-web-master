let errorObj = { ok: false, data: null }
let baseURL = "https://api.chinohelper.xyz"
let headers = {
    "Content-Type": "application/json; charset=UTF-8"
}

var iflogin = async () => {
    try {
        let data = await (await fetch(`${baseURL}/user/dc/haslogin`, {
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
var getData = async (option) => {
    try {
        console.log(option)
        let data = await (await fetch(`${baseURL}/user/dc/data`, {
            method: "POST",
            credentials: 'include',
            headers: headers,
            body: JSON.stringify({filter: option})
        })).json()
        return data;
    } catch (error) {
        console.log(error)
        return errorObj;
    }
}