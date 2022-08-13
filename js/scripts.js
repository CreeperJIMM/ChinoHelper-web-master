/*!
* Start Bootstrap - Modern Business v5.0.5 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
var Lang = document.cookie.replace(/(?:(?:^|.*;\s*)i18nLang\s*\=\s*([^;]*).*$)|^.*$/, "$1");
console.log(Lang)
console.log(navigator.language)
if(!Lang && navigator.language) {
    console.log("hi")
    document.cookie = `i18nLang=${navigator.language}; domain=chinohelper.xyz`
}