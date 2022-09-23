import React from 'react';
//import "core-js/stable";
import "regenerator-runtime/runtime";
import KernelLoad from './loader/kernelLoad'
let x = 1;

const App = () => {
    if (x == 1) {
        return <KernelLoad />
    }
    else if (x == 0) {
        return <h1>Kernel not Found !</h1>
    }
    else {
        return <h1>Kernel not Found !</h1>
    }
}

export default App