(async () => {
    let serverlist = []
    let guilds = (await getGuilds(true)).data;
    guilds.sort(function (a, b) {
        return a.exist - b.exist;
    });
    guilds.forEach(guild => {
        console.log(guild.name)
        serverlist.push(guildsample(guild));
    });
    document.getElementById("server_list").innerHTML = serverlist.join("\n");
})()
let guildsample = function(guild) {
    let user = "管理員";
    if(guild.owner) user = "服主"
    let button = invitebutton()
    if(guild.exist) button = mangebutton(guild.id)
    return `<div class="col-lg-8 col-xl-8 mb-2">
    <div class="card h-100 shadow border-0">
        <img id="card_server_banner" class="card-img-top"
            src="https://dummyimage.com/600x300/12400b/bfc3ff&text=+" alt="..." />
        <span class="text-center">
            <img id="card_server_avatar" class="rounded-circle"
                src="https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg" alt="...">
        </span>
        <div class="card-body p-2">
            <div id="card_server_name" class="h5 card-title mb-3">${guild.name}</div>
            <div id="card_server_desc" class="card-text mb-0">
            <div style="float:left;">${user}</div>
            </div>
            ${button}
        </div>
    </div>
    </div>`
}
let invitebutton = function() {
    return `<div class="text-end py-1">
    <a onclick="discordinvite()" class="btn btn-primary">新增</a>
</div>`
}
let mangebutton = function(id) {
    return `<div class="text-end py-1">
    <a href="/guilds/${id}" class="btn btn-primary">管理</a>
</div>`
}
var discordinvite = async function (id) {
    let w = document.body.clientWidth / 3;
    let h = document.body.clientHeight / 3;
    window.open(
        "/api/invite?id="+id,
        "newwindow",
        "width=500,height=810,top=" +
        h +
        ", left=" +
        w +
        " toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no"
    );
}