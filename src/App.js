import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import * as serviceWorker from "./serviceWorker";
/*import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Navigation,
    Footer,
    Home,
    About,
    Contact,
    Blog,
    Posts,
    Post
} from "./page";*/

/*function Hello() {
    return "loading";
}*/

/*function Kernel1_test() {
    return <frame width="50%" height="50%" src="kernel/lib/Boxedwine/test.html">BoxedWine Test</frame>;
}*/

ReactDOM.render(<App />, document.getElementById('app'))

/*ReactDOM.render(<Hello />, document.getElementById('app2'))*/


//ReactDOM.render(<React.StrictMode><KernelLoad /></React.StrictMode>, document.getElementById('app2'))

//ReactDOM.render(<Kernel1_test />, document.getElementById('app3-test'))

/*ReactDOM.render(
    <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />}>
                <Route path="" element={<Posts />} />
                <Route path=":postSlug" element={<Post />} />
            </Route>
        </Routes>
        <Footer />
    </Router>,

    document.getElementById("root")
);*/

serviceWorker.unregister();