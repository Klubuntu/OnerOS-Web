import interact from "interactjs";
import $ from 'jquery';
let windowID = 1;
let maximized = 0;


export function resizable() {
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
export function draggable() {
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

    // interact(".box-zone")
    //     .dropzone({
    //         ondrop: function (event) {
    //             /* alert(event.relatedTarget.id + " was dropped into " + event.target.id); */
    //             event.relatedTarget.classList.add("dropped");
    //         }
    //     })

    //     .on("dropactivate", function (event) {
    //         //event.target.classList.add("dropped");
    //     });




}

export function build_window() {
    /*$(function () {
        $(".window").resizable({
            maxHeight: "80%",
            maxWidth: "80%",
            minHeight: 200,
            minWidth: 200
        });
    });*/
    /*
    $(function () {
        $(".window").draggable();
    });*/
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


export function check_details(arg) {
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

export function init2() {
    $('.fa-expand').click(function () {
        parent = this.parentElement.parentElement.parentElement.parentElement;
        //console.log($(this).parent().parent().parent().parent().css());
        var arg = parent.classList.contains("window-maximized");
        if (arg == false) {
            $(parent).addClass("window-maximized");
        }
        else if (arg == true) {
            $(parent).removeClass("window-maximized");
        }
        else {
            console.warn("[Window Layout] Broken class 'window-maximized'")
        }
        /*if (maximized == 0) {
            $(parent).addClass("window-maximized");
            var x = "maximized_" + parent.id
            var y = "var " + x + "=1;";
            //eval(y)
            //alert(eval(x))
            maximized = 1;
        }
        else if (maximized == 1) {
            $(parent).removeClass("window-maximized");
            var x = "maximized_" + parent.id
            var y = "var " + x + "=0;";
            //eval(y)
            //alert(eval(x))
            maximized = 0;
        }*/
    });
}

export function createWindow(url, title, color,) {
    //var Win = windowID = windowID - 1;
    var closeWindow = "(this).parentElement.parentElement.parentElement.parentElement.remove();\
    i = 0;\
    x = document.getElementById('ws" + windowID + "');\
    x.remove();"

    var maximizeWindow = init2();

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
    $("#" + windowIDn + " .top-window").append('<span id="title">' + title + '</span><span class="window-actions"><i class="fa-solid fa-window-minimize"></i><i class="fa-solid fa-expand"></i><i class="fa-solid fa-xmark" onclick="' + closeWindow + /*Win +*/ '"></i></span>')
    $("#" + windowIDn + " .frame-window").append('<embed src="' + url + '" style="width: 100%;height: 100%;">')
    $(".active").removeClass("active")
    $("#" + windowIDn).addClass("active")
    $("#app").append();
    /*draggable(window)
    resizable(window)*/
    setInterval(
        function () {
            check_details("." + windowIDn)
        }
            .bind(this),
        150
    );
    build_window();
    init2()
    windowID = windowID + 1;
}


