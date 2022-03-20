import React from "react";
import ReactDOM from "react-dom";
import "./jquery-global.js";
import $ from 'jquery'
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';
import * as Window from './window/layout.js';
import * as Taskbar from './taskbar/taskbar.js';
import "../font-awesome/css/all_pro.css";

// TODO LIST:
/// > Add Window switch to left click mouse if open & add open new window to right click
/// > Add Minimize button
/// > Fix window layout
/// > Add Files layout & direct open
/// > Add Windows/Linux/Android/MacOS Support
// ----------

// Not Implemented Function Notify
function notImplemented() {
    alert("Function not implemented yet")
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

function exampleWindow() {
    Window.createWindow("https://time.is/Warsaw", "Time.is", "red")
    Window.createWindow("https://example.com", "", "gray")
}

function init() {
    setTimeout(
        function () {
            $("body").addClass("loading-background")
            $("body").addClass("loaded-background")
            Taskbar.build_taskbar();
        }
            .bind(this),
        1550
    );

}


$(function () {

    init();
});


export default class CreateDiv extends React.Component {

    render() {
        return (
            <button onClick={exampleWindow}>Add Example Windows</button>


        )

    }

}

//export default CreateDiv
//
