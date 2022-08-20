let Apiheadsend = async (url) => {
    try {
        let data = await (await fetch(`${baseURL}${url}`, {
            method: "HEAD",
            credentials: 'include'
        }))
        switch (data.status) {
            case 200: 
                return {ok:true,login:true};
            case 204: 
                return {ok:true,login:true};
            case 401: 
                return {ok:false,login:true};
            default:
                return {ok: false};
        }
    } catch (error) {
        return {ok: false};
    }
}

var api = {
    logout: async () => {
        return await Apiheadsend("/login/out");
    }
}