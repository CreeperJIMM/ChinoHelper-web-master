let errorObj = { ok: false, data: null }
let baseURL = "https://api.chinohelper.xyz"
let headers = {
    "Content-Type": "application/json; charset=UTF-8"
}

var iflogin = async () => {
    try {
        let data = await (await fetch(`${baseURL}/user/dc/haslogin`, {
            method: "GET",
            withCredentials: true,
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
        let body = {}
        if (option) {
            body = {"filter": option}
        }
        let data = await (await fetch(`${baseURL}/user/dc/data`, {
            method: "POST",
            withCredentials: true,
            headers: headers,
            body: body
        })).json()
        return data;
    } catch (error) {
        console.log(error)
        return errorObj;
    }
}