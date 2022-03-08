import React from "react";
import ReactDOM from 'react-dom';
import OSLoading from "./loading.jsx"
/*var Template = require('./template');
var BoxedWine = require('../public/kernel/lib/loadBoxedwine');
*/

const KernelLoad = () => {
    /* ReactDOM.render(<Animation />, document.getElementById('app3'))*/

    return (
        <>
            < OSLoading />
            <h1></h1></>
    )
}


/*
export default class KernelLoad extends React.Component {
    render() {
        var bar = 'baz';
        return (
            <BoxedWine />
        )
    }
}*/

/*React.module.exports = React.createClass({
    render: function () {
        return (
            <div dangerouslySetInnerHTML={template} />
        );
    }
});*/
/*const KernelLoad = () => {
    //const data = '<iframe src="public/index.html"></iframe>';
    const data = "";

    return (
        <div
            dangerouslySetInnerHTML={template}
        />
    );
}*/


/*class KernelLoad extends React.Component {
    state = {
        page: null
    };

    componentDidMount() {
        fetch("public/index.html")
            .then(result => {
                return result.text();
            })
            .then(page => {
                this.setState(
                    {
                        page: { __html: page }
                    },
                    () => {
                        //window.$.getScript("landing-page-one/js/index.js");
                    }
                );
            });
    }

    render() {
        const { page } = this.state;
        return (
            <>
                <h2>
                    <span>Inserting project using React's </span>
                    <code>dangerouslySetInnerHTML</code>:
                </h2>
                <div
                    dangerouslySetInnerHTML={page && page}
                />
            </>
        );
    }
}

*/

export default KernelLoad;
