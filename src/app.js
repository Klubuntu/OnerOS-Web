import React from 'react';
import ReactDOM from 'react-dom';
import App from './os/index';
import * as serviceWorker from "./serviceWorker";

/*function Kernel1_test() {
    return <frame width="50%" height="50%" src="kernel/lib/Boxedwine/test.html">BoxedWine Test</frame>;
}*/

ReactDOM.render(<App />, document.getElementById('app'))

/*ReactDOM.render(<Hello />, document.getElementById('app2'))*/


//ReactDOM.render(<React.StrictMode><KernelLoad /></React.StrictMode>, document.getElementById('app2'))

//ReactDOM.render(<Kernel1_test />, document.getElementById('app3-test'))


serviceWorker.unregister();