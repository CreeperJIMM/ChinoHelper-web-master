(async () => {
    let user = (await getAllData(true,true)).data;
    document.getElementById("card_avatar").src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`;
    if (user.banner) {
        document.getElementById("card_banner").src = `https://cdn.discordapp.com/banners/${user.id}/${user.banner}?size=2048`
    } else {
        document.getElementById("card_banner").src = `https://dummyimage.com/600x350/${user.banner_color.replace("#", "")}.png&text=+`
    }
    document.getElementById("card_username").innerHTML = `${user.username}#${user.discriminator}`
    let data = (await getUserValue()).data;
    let full = (1000 + (50 * data.rank))
    setTimeout(() => {
        document.getElementById("card_rank_bar1").style.width = `${Math.round((data.exp/full)*100)}%`;
    }, 500);
    if(document.getElementById("card_info")) {
        document.getElementById("card_desc").innerHTML = `
        <div style="float:left;">Rank ${data.rank}</div>
        <div style="float:right;">${data.exp}/${full} Exp</div><br>
        <div class="progress">        
            <div id="card_rank_bar1" class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%;"></div>
        </div>
        💰${data.money}<br>`
        let text = {
            marry: "單身"
        }
        if(data.marry) text.marry = "脫單"
        document.getElementById("card_info").innerHTML = `感情狀況 ${text.marry}<br>
        偏好語言 ${data.language}<br>
        觸圖資料<br>
        ● 智乃 ${data.image.times.chino}次<br>
        ● 心愛 ${data.image.times.cocoa}次<br>
        ● 蘿莉 ${data.image.times.loli}次<br>
        ● VTuber ${data.image.times.vtuber}次<br>
        ● 其他 ${data.image.times.other}次<br>
        初見智乃 ${new Date(data.time).toLocaleString()}
        `
    }
})()