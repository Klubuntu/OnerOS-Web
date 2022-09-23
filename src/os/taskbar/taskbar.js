import $ from 'jquery';
import * as Window from '../window/layout.js';
import * as startMenu from './startMenu.js';
import * as windowSwitcher from './windowSwitcher.js';

export function build_taskbar() {
    var styleSpan = "height: 60%;margin-top: -1.4vh;margin-left: 1vw;"
    $("#app").append("<div id='os-info'>Oner OS (Preview)</div>")
    $("#app").append("<div class='taskbar'></div>")
    $(".taskbar").append("<div class='apps'></div>")
    // Taskbar Apps
    $(".apps").append('<i class="fa-solid fa-grid-2" id="app-menu"></i>')
    $(".apps").append('<span id="app-switcher"><img src="https://i.imgur.com/S7tFZb9.png" alt="AppSwitcher" style="' + styleSpan + '"></span>')
    $(".apps").append('<span id="google-app"><img src="https://i.imgur.com/L8FeQdV.png" alt="Google" style="' + styleSpan + '"></span>')
    $(".apps").append('<span id="bing-app"><img src="https://i.imgur.com/UBj4xGx.png" alt="Bing" style="' + styleSpan + '"></span>')
    $(".apps").append('<span id="facebook-app"><img src="https://i.imgur.com/NdsViIX.png" alt="Facebook" style="' + styleSpan + '"></span>')
    $(".apps").append('<span id="archive-org-app"><img src="https://i.imgur.com/oKvDTeK.png" alt="Archive.org" style="' + styleSpan + '"></span>')
    $(".apps").append('<span id="spotify-app"><img src="https://i.imgur.com/1elvlFV.png" alt="Spotify" style="' + styleSpan + '"></span>')
    $(".apps").append('<span id="stackoverflow-app"><img src="https://i.imgur.com/desS9JI.png" alt="Stack Overflow" style="' + styleSpan + '"></span>')
    $(".apps").append('<span id="whatsapp-app"><img src="https://i.imgur.com/7bY02OT.png" alt="Whatsapp" style="' + styleSpan + '"></span>')
    // Time & Date
    $(".taskbar").append('<span class="dt"></span>')
    $(".dt").append('<span id="date">06.03.2022</span>')
    $(".dt").append('<span id="time">00:37</span>')

    $('#app-menu').click(function () {
        //notImplemented()
        startMenu.mSwitch()
    });

    $('#app-switcher').click(function () {
        windowSwitcher.Switch()
    });

    $('#google-app').click(function () {
        Window.createWindow("https://www.google.com/webhp/", "Google", "#1976d2")
    });
    $('#bing-app').click(function () {
        Window.createWindow("https://bing.com/", "Bing", "#1976d2")
    });
    $('#facebook-app').click(function () {
        Window.createWindow("https://facebook.com/", "Facebook", "#1778F2")
    });
    $('#archive-org-app').click(function () {
        Window.createWindow("https://archive.org/", "Internet Archive", "black")
    });
    $('#spotify-app').click(function () {
        Window.createWindow("https://spotify-clone-oguz3.web.app/", "Spotify", "green")
    });
    $('#stackoverflow-app').click(function () {
        Window.createWindow("https://clone-of-stackoverflow.vercel.app/", "Stack Overflow", "orange")
    });
    $('#whatsapp-app').click(function () {
        Window.createWindow("https://whatsapp-clone-web.netlify.app/", "Whatsapp", "green")
    });
}
