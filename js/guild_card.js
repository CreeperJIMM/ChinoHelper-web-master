(async () => {
    let guilds = (await getGuilds(true)).data;
    guilds.forEach(element => {
                
    });
})()
let a = `<div class="card h-100 shadow border-0">
<img id="card_server_banner" class="card-img-top"
    src="https://dummyimage.com/600x300/12400b/bfc3ff&text=+" alt="..." />
<span class="text-center">
    <img id="card_server_avatar" class="rounded-circle"
        src="https://dummyimage.com/1024/19632d/0011ff.png&text=+" alt="...">
</span>
<div class="card-body p-2">
    <div id="card_server_name" class="h5 card-title mb-3"></div>
    <div id="card_server_desc" class="card-text mb-0">
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
    <div class="text-end py-1">
        <a class="btn btn-primary">管理</a>
    </div>
</div>
</div>`