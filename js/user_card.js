(async () => {
    let user = (await getAllData(true)).data;
    document.getElementById("card_avatar").src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`;
    if (user.banner) {
        document.getElementById("card_banner").src = `https://cdn.discordapp.com/banners/${user.id}/${user.banner}?size=2048`
    } else {
        document.getElementById("card_banner").src = `https://dummyimage.com/600x350/${user.banner_color.replace("#", "")}.png&text=+`
    }
    document.getElementById("card_username").innerHTML = `${user.username}#${user.discriminator}`
    let data = (await getUserValue()).data;
    let full = (1000 + (50 * data.rank))
    document.getElementById("card_desc").innerHTML = `
    <div style="float:left;">Rank ${data.rank}</div>
    <div style="float:right;">${data.exp}/${full} Exp</div><br>
    <div class="progress">        
        <div id="card_rank_bar1" class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%;"></div>
    </div>
    💰${data.money}<br>`
    setTimeout(() => {
        document.getElementById("card_rank_bar1").style.width = `${Math.round((data.exp/full)*100)}%`;
    }, 500);
})()