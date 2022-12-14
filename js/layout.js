$(document).ready(() => {
    document.getElementById("header-place").innerHTML = header;
    document.getElementById("footer-place").innerHTML = footer;
})

var header = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container px-5">
        <a class="navbar-brand" href="/">智乃小幫手</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            onclick="vib()" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link" href="/">首頁</a></li>
                <li class="nav-item"><a class="nav-link" href="/about">關於</a></li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">聯絡我們</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pricing">加入會員</a>
                </li>
                <li class="nav-item"><a class="nav-link" href="/faq">FAQ</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">部落格</a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                        <li><a class="dropdown-item" href="/blog-home">所有文章</a></li>
                        <li>
                            <a class="dropdown-item" href="/update-log">更新日記</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">資源</a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                        <li>
                            <a class="dropdown-item" href="/portfolio-overview">開源</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="https://docs.chinohelper.xyz">官方文檔</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">智乃選單</h5>
        <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div>
            <div class="list-group">
                <a href="/" class="list-group-item list-group-item-action list-group-item-dark">首頁</a>
                <a href="/about" class="list-group-item list-group-item-info">關於我們</a>
                <a href="/about/chino" class="list-group-item list-group-item-info">認識智乃</a>
                <a href="/info" class="list-group-item list-group-item-info">機器人資訊</a>
                <hr class="dropdown-divider" />
                用戶功能
                <a href="/login/discord" class="list-group-item list-group-item-action list-group-item-dark">用戶面板</a>
                <a href="/login" class="list-group-item list-group-item-action list-group-item-secondary">登入狀態</a>
                <a href="/login/logout" class="list-group-item list-group-item-action list-group-item-secondary">登出</a>
                <hr class="dropdown-divider" />
                指令功能
                <a href="/cmd" class="list-group-item list-group-item-action list-group-item-dark">指令區</a>
                <hr class="dropdown-divider" />
                伺服器功能
                <a href="/guild/dashboard" class="list-group-item list-group-item-action list-group-item-dark">伺服器列表</a>
                <a href="/guild/music/dashboard"
                    class="list-group-item list-group-item-action list-group-item-secondary">音樂控制區</a>
            </div>
        </div>
        <div class="dropdown mt-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                data-bs-toggle="dropdown">
                語言設置
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">繁體中文</a></li>
                <li><a class="dropdown-item" href="#">English</a></li>
                <li><a class="dropdown-item" href="#">日本語</a></li>
            </ul>
        </div>
    </div>
</div>
<font size="5%">
    <div id="Nword"></div>
    <div id="Nchoose"></div>
</font>`

var footer = `
<div class="container px-5">
    <div class="row align-items-center justify-content-between flex-column flex-sm-row">
        <div class="col-auto">
            <div class="small m-0 text-white">
                Copyright &copy; 智乃小幫手 2021
            </div>
        </div>
        <div class="col-auto">
            <a class="link-light small" href="/privacy">隱私權條款</a>
            <span class="text-white mx-1">&middot;</span>
            <a class="link-light small" href="/terms">服務條款</a>
            <span class="text-white mx-1">&middot;</span>
            <a class="link-light small" href="https://discord.gg/P2yg5V2">錯誤回報</a>
        </div>
    </div>
</div>`