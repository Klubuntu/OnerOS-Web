import React from 'react';
import ReactDOM from 'react-dom';
import "./loading.css";
//import "./loading.js";
import CreateDiv from "./os.js"
function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function OSLoad() {
    ReactDOM.render(<CreateDiv />, document.getElementById('app'))
    /*var app = document.getElementById("app")
    app.innerHTML = "Loading"*/
    removeElementsByClass("osa")


}

export class OSAnimation extends React.Component {

    render() {
        setTimeout(() => { OSLoad() }, 3000)
        return (
            <div className="osa wrapper">
                <div className="box">
                </div>
            </div>

        )

    }

}
export class OSName extends React.Component {
    render() {
        var bar = 'baz';
        return (
            <div className="osa wrapper">
                <div className="loading_title">Oner OS</div>
            </div>
        )
    }
}
export default class OSLoading extends React.Component {
    render() {
        return <><OSName /><OSAnimation /></>

    }
}

