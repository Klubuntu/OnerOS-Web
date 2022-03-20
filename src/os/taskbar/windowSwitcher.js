import $ from 'jquery';

var switch_active = 0;

function get_favicon(url) {
    return "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + url + "&size=64"
}

export function Switch() {
    if (switch_active == 0) {
        //console.log("Latest Window id: ", windowID - 1);
        if (!$(".window-switcher")[0]) {
            $("#app").append('<div class="window-switcher"></div>');
        }
        $(".window-switcher").find("span").remove()
        switch_active = 1;
        var window_idList = $('div[class*=window_id]')
        if ($('#ws-layout').length) { }
        else {
            $(".window-switcher").append("<div id='ws-layout'></div>")
        }
        if (window_idList.length == 0) {
            var wLIST = [];
            wLIST.push("(NO FOUND OPEN APPS)");
        }
        else {
            var wLIST = []
            for (const element of window_idList) {
                var wELEMENT = element.id.split("window_id")[1];
                wLIST.push(wELEMENT);
                console.warn(wLIST);
            }
        }
        //console.log(x2[0])

        for (const i of wLIST) {
            var x = $("#window_id" + i + " .window-box .top-window").css("background-color")
            var backgroundColor = "style=" + "'background-color:" + x + ";'";
            var titleWindow = $("#window_id" + i + " .window-box .top-window #title").text();
            var urlWindow = $("#window_id" + i + " .window-box .frame-window embed").attr("src");
            console.log("#window_id" + i)
            console.log(urlWindow)
            $("#ws-layout").append("<span id='ws" + i + "' " + backgroundColor + "><div>" + "<img style='display: inline-block;' width='32px' src='" + get_favicon(urlWindow) + "'></img>" + "<h5 style='margin-left: 7px;display: inline-block;position: relative;top:2px;'>" + titleWindow + "</h5>" + "<p style='margin-top: -8px; display: none;'>" + "Window " + i + "</p></div></span>")
            /*if (i == wLIST.length) {
                if ($('#ws-sep').length) {
                    console.log("activated")
                }
                else {
                    var x = document.getElementById("ws" + i)
                    //x.parentElement.innerHTML += "<h5 id='ws-sep'>&nbsp;</h5>"
                    console.log("activating")
                }
            }*/
            $(".window-switcher").show()
            $("#ws" + i).click(function () {
                console.log(this.id)
                $(".window-switcher").hide()
                //$(".window-switcher span").remove();
                $(".active").removeClass("active")
                var windowIDn2 = "#window_id" + i
                $(windowIDn2).addClass("active")
                switch_active = 0
            });
        }
        /*for (let i = 1; i < windowID; i++) {
            $(".window-switcher").append("<span id='ws" + i + "'>Window " + i + "</span>")
            //console.log(i)
            $(".window-switcher").show()
            $("#ws" + i).click(function () {
                console.log(this.id)
                $(".window-switcher").hide()
                //$(".window-switcher span").remove();
                $(".active").removeClass("active")
                var windowIDn2 = "#window_id" + i
                $(windowIDn2).addClass("active")
                switch_active = 0
                i = 0
            });
        }
        */
    }

    else if (switch_active == 1) {
        $(".window-switcher").hide()
        switch_active = 0;
    }

}