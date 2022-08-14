let errorObj = { ok: false, data: null }
let baseURL = "https://api.chinohelper.xyz"

var iflogin = async () => {
    try {
        let data = await (await fetch(`${baseURL}/user/dc/haslogin`, { method: "GET" })).json()
        return data
    } catch (error) {
        console.log(error)
        return errorObj;
    }
}
var getData = async (option) => {
    try {
        let body = null
        if(option) {
            option = JSON.stringify(option)
            body = new URLSearchParams({option})
        }
        let data = await (await fetch(`${baseURL}/user/dc/data`, {
            method: "POST", body: body
        })).json()
        return data;
    } catch (error) {
        console.log(error)
        return errorObj;
    }
}