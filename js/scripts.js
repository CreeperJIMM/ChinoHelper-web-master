/*!
* Start Bootstrap - Modern Business v5.0.5 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
var Lang = document.cookie.replace(/(?:(?:^|.*;\s*)i18nLang\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if(!Lang && navigator.language) {
    document.cookie = `i18nLang=${navigator.language.toLocaleLowerCase()}; domain=chinohelper.xyz`
}
var vib = function () {
    if (navigator.vibrate) navigator.vibrate(50);
};