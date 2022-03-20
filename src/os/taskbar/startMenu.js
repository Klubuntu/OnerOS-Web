import $ from 'jquery';

var menu_active = 0;

export function mSwitch() {
    console.log(menu_active)
    if (menu_active == 0) {
        $("#app").append('<div class="menu"></div>')
        $(".menu").append('<div class="" style="text-align: center;font-size: 15px;">Oner OS Web <i>(Start Menu Preview)</i></div>')
        $(".menu").append('<div class="app-layout"></div>')
        $(".menu").append('<div class="favourite-layout"></div>')
        $(".menu").append('<div class="search-layout"></div>')
        $(".menu").append('<div class="usr-actions_layout">')
        $(".usr-actions_layout").append('<i class="fa-solid fa-gear"></i>')
        $(".usr-actions_layout").append('<i class="fa-solid fa-folder-blank"></i>')
        $(".usr-actions_layout").append('<i class="fa-solid fa-right-from-bracket"></i>')
        $(".usr-actions_layout").append('<i class="fa-solid fa-power-off"></i>')
        $(".favourite-layout").append('<div class="example-favourite-app"><i class="fa-solid fa-microchip icon"></i></div>')
        $(".favourite-layout").append('<div class="example-favourite-app"><i class="fa-solid fa-router icon"></i></div>')
        $(".favourite-layout").append('<div class="example-favourite-app"><i class="fa-solid fa-hard-drive icon"></i></div>')
        $(".favourite-layout").append('<div class="example-favourite-app"><i class="fa-solid fa-compact-disc icon"></i></div>')
        $(".favourite-layout").append('<div class="example-favourite-app"><i class="fa-solid fa-camera icon"></i></div>')
        $(".favourite-layout").append('<div class="example-favourite-app"><i class="fa-solid fa-album icon"></i></div>')
        $(".favourite-layout").append('<div class="example-favourite-app"><i class="fa-solid fa-terminal icon"></i></div>')
        $(".favourite-layout").append('<div class="example-favourite-app"><i class="fa-solid fa-database icon"></i></div>')
        $(".app-layout").append('<div class="box"><div class="icon"><i class="fa-solid fa-ghost"></i></div><div class="text">App Name</div></div>')
        $(".app-layout").append('<div class="box"><div class="icon"><i class="fa-solid fa-ghost"></i></div><div class="text">App Name</div></div>')
        $(".app-layout").append('<div class="box"><div class="icon"><i class="fa-solid fa-ghost"></i></div><div class="text">App Name</div></div>')
        $(".app-layout").append('<div class="box"><div class="icon"><i class="fa-solid fa-ghost"></i></div><div class="text">App Name</div></div>')
        $(".app-layout").append('<div class="box"><div class="icon"><i class="fa-solid fa-ghost"></i></div><div class="text">App Name</div></div>')
        $(".app-layout").append('<div class="box"><div class="icon"><i class="fa-solid fa-ghost"></i></div><div class="text">App Name</div></div>')
        $(".search-layout").append('<input id="search_menu" type="text" placeholder="Search 🔎" style="text-align: center;background: transparent;border: 0;outline: none;">')
        menu_active = 1;
    }
    else if (menu_active == 1) {
        $(".menu").remove();
        menu_active = 0;
    }
    else {
        alert("Start menu broken. Please Reset Cookie/Session this page");
    }

}