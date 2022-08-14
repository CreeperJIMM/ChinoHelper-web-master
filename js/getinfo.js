let errorObj = {ok:false,data: null}
var getData = async(option) => {
 return {Error:"hi"}
}
var iflogin = async() =>  {
    try {
        let data =  await (await fetch('/api/user',{method: "POST",body: new URLSearchParams({
            "uid": id
        })})).json()
        return data
    } catch (error) {
        console.log(error)
        return errorObj;
    }
}