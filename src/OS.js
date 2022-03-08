import React from "react";
import ReactDOM from "react-dom";
import "./jquery-global.js";
import $ from 'jquery'
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';
import interact from "interactjs";
import "./font-awesome/css/all_pro.css";

let windowID = 1;
let maximized = 0;
var switch_active = 0

function switch_window() {
    if (switch_active == 0) {
        //console.log("Latest Window id: ", windowID - 1);
        if (!$(".window-switcher")[0]) {
            $("#app").append('<div class="window-switcher"></div>');
        }
        $(".window-switcher").find("span").remove()
        switch_active = 1;
        var window_idList = $('div[class*=window_id]')
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
            $(".window-switcher").append("<span id='ws" + i + "'>Window " + i + "</span>")
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


function build_taskbar() {
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

    $('#app-switcher').click(function () {
        switch_window()
    });

    $('#google-app').click(function () {
        createWindow("https://googlclone-v1.web.app/", "Google", "#1976d2")
    });
    $('#bing-app').click(function () {
        createWindow("https://bing.com/", "Bing", "#1976d2")
    });
    $('#facebook-app').click(function () {
        createWindow("https://facebook.com/", "Facebook", "#1778F2")
    });
    $('#archive-org-app').click(function () {
        createWindow("https://archive.org/", "Internet Archive", "black")
    });
    $('#spotify-app').click(function () {
        createWindow("https://spotify-clone-oguz3.web.app/", "Spotify", "green")
    });
    $('#stackoverflow-app').click(function () {
        createWindow("https://clone-of-stackoverflow.vercel.app/", "Stack Overflow", "orange")
    });
    $('#whatsapp-app').click(function () {
        createWindow("https://whatsapp-clone-web.netlify.app/", "Whatsapp", "green")
    });
}


function resizable() {
    interact('.window')
        .resizable({
            // resize from all edges and corners
            edges: { left: true, right: true, bottom: true, top: true },

            listeners: {
                move(event) {
                    var target = event.target
                    var x = (parseFloat(target.getAttribute('data-x')) || 0)
                    var y = (parseFloat(target.getAttribute('data-y')) || 0)

                    // update the element's style
                    target.style.width = event.rect.width + 'px'
                    target.style.height = event.rect.height + 'px'

                    // translate when resizing from top or left edges
                    x += event.deltaRect.left
                    y += event.deltaRect.top

                    target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

                    target.setAttribute('data-x', x)
                    target.setAttribute('data-y', y)
                    target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
                }
            },
            modifiers: [
                // keep the edges inside the parent
                interact.modifiers.restrictEdges({
                    outer: 'parent'
                }),

                // minimum size
                interact.modifiers.restrictSize({
                    min: { width: 100, height: 50 }
                })
            ],

            inertia: true
        })
}
function draggable() {
    var x = 0; var y = 0;

    //const position = { x: 0, y: 0 };

    interact(".window")
        .draggable({
            modifiers: [
                interact.modifiers.snap({
                    targets: [interact.snappers.grid({ x: 30, y: 30 })],
                    range: Infinity,
                    relativePoints: [{ x: 0, y: 0 }]
                }),
                interact.modifiers.restrict({
                    restriction: ".box-zone".parentNode,
                    elementRect: { top: 1, left: 1, bottom: 1, right: 1 },
                    endOnly: true
                })
            ],
            inertia: true
        })
        .on("dragmove", function (event) {
            console.log(event.target)
            //$("#root").text(event.dx + " x " + event.dy)
            x += event.dx;
            y += event.dy;

            event.target.style.transform = "translate(" + x + "px, " + y + "px)";

        });

    interact(".box-zone")
        .dropzone({
            ondrop: function (event) {
                /* alert(event.relatedTarget.id + " was dropped into " + event.target.id); */
                event.relatedTarget.classList.add("dropped");
            }
        })

        .on("dropactivate", function (event) {
            //event.target.classList.add("dropped");
        });



    interact("body").dropzone({
        ondrop: function (event) {
            /* alert(event.relatedTarget.id + " was dropped into " + event.target.id); */

            event.relatedTarget.classList.remove("dropped");
        }
    });

}

function build_window() {
    $(function () {
        $(".window").resizable({
            maxHeight: "80%",
            maxWidth: "80%",
            minHeight: 200,
            minWidth: 200
        });
    });
    $(function () {
        $(".window").draggable();
    });
    $(".window").click(function (event) {
        $(".window").removeClass("active");
        $(this).addClass("active");
    })
    var isDragging = false;
    var mouseDown = false;

    $('.window')
        .mousedown(function () {
            isDragging = false;
            mouseDown = true;
        })
        .mousemove(function (e) {
            isDragging = true;

            if (isDragging === true && mouseDown === true) {
                //console.log("dragging")
                $(".window").removeClass("active");
                $(this).addClass("active");
            }
        })
        .mouseup(function (e) {

            var wasDragging = isDragging;

            isDragging = false;
            mouseDown = false;

            if (!wasDragging) {
                //console.log("not dragging")
            }

        }
        );
}

/*$(function () {
    function maximize_toggle() {
        parent = "(this).parentElement.parentElement.parentElement.parentElement"
        if (Maximized == 0) {
            $(parent).addClass("window-maximized");
            Maximized = 1;
        }
        else if (Maximized == 1) {
            $(parent).removeClass("window-maximized");
            Maximized = 0;
        }
 
    }
});*/

function check_details(arg) {
    $(window).off('scroll');
    try {
        let left = $(arg)[0].style.left.replaceAll("px", "")
        let top = $(arg)[0].style.top.replaceAll("px", "")
        var border_left = innerWidth - 25
        var border_top = innerHeight - 45
        //console.log("LEFT" + arg + ": " + left)
        //console.log("TOP" + arg + ": " + top)
        if (left > border_left) {
            console.log("LEFT: Window out of border")
            $(arg).css("left", border_left);
        }
        if (top > border_top) {
            console.log("TOP: Window out of border")
            $(arg).css("top", border_top);
        }
    }
    catch (exception) {
        //
    }



    /*tt = (arg).style.top.replace("px", "")
    console.log("T:" + tt)*/
}


function init() {
    $("body").addClass("loading-background")
    $("body").addClass("loaded-background")
    $('.fa-expand').click(function () {
        parent = this.parentElement.parentElement.parentElement.parentElement;
        if (maximized == 0) {
            $(parent).addClass("window-maximized");
            maximized = 1;
        }
        else if (maximized == 1) {
            $(parent).removeClass("window-maximized");
            maximized = 0;
        }
    });

}

function time_date() {
    var today = new Date();
    var hours = today.getUTCHours();
    var minutes = today.getUTCMinutes();
    if (String(hours).length == 1) {
        hours = "0" + hours;
    }
    if (String(minutes).length == 1) {
        minutes = "0" + minutes;
    }
    var time = hours + ":" + minutes;
    var day = today.toDateString().split(" ")[2];
    var month = today.getUTCMonth() + 1;
    if (String(month).length == 1) {
        month = "0" + month;
    }
    var year = today.getUTCFullYear();
    var date = day + "." + month + "." + year;

    $("#time").text(time)
    $("#date").text(date)
}

setInterval(
    function () {
        time_date()
    }
        .bind(this),
    950
);


function createWindow(url, title, color,) {
    //var Win = windowID = windowID - 1;
    var closeWindow = "(this).parentElement.parentElement.parentElement.parentElement.remove();\
    i = 0;\
    x = document.getElementById('ws" + windowID + "');\
    x.remove();"

    if (title == "") {
        title = "Browser"
    }
    else if (title == null) {
        title = "Browser"
    }

    if (color == "") {
        color = "coral"
    }
    else if (color == null) {
        color = "coral"
    }
    var windowIDn = "window_id" + windowID
    var window = '<div class="window ' + windowIDn + '" id="' + windowIDn + '"></div>';

    /*const title = React.createElement('h1', {}, 'My First React Code');
    
    ReactDOM.render(
        title,
        document.getElementById('appe')
    );*/
    $(this).remove();
    $("#app").append(window);
    $("#" + windowIDn).append('<div class="window-box"><div class="top-window" style="background-color: ' + color + '"></div><div class="frame-window" style="width: 99.9%;height: 91.2%;"></div></div>')
    $("#" + windowIDn + " .top-window").append('<span id="title">' + title + '</span><span class="window-actions"><i class="fa-solid fa-window-minimize"></i><i class="fa-solid fa-expand" ></i><i class="fa-solid fa-xmark" onclick="' + closeWindow + /*Win +*/ '"></i></span>')
    $("#" + windowIDn + " .frame-window").append('<embed src="' + url + '" style="width: 100%;height: 100%;">')
    $(".active").removeClass("active")
    $("#" + windowIDn).addClass("active")
    $("#app").append();
    /*draggable(window)
    resizable(window)*/
    setInterval(
        function () {
            check_details("." + windowIDn)
            time_date()
        }
            .bind(this),
        150
    );
    build_window();
    init()
    windowID = windowID + 1;
}

function exampleWindow() {
    createWindow("https://time.is/Warsaw", "Time.is", "red")
    createWindow("https://example.com", "", "gray")
    init()
}

$(function () {
    build_taskbar();
});


export default class CreateDiv extends React.Component {

    render() {
        return (
            <button onClick={exampleWindow}>Add</button>


        )

    }

}

//export default CreateDiv