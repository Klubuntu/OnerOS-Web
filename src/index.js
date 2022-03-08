import React from 'react';
//import "core-js/stable";
import "regenerator-runtime/runtime";
import KernelLoad from './kernelLoad'
let x = 1;
//import regeneratorRuntime from "regenerator-runtime";

/* (async () => {
    const KernelLoad = await import('./kernelLoad');
})();*/

/*import('./kernelLoad.js').then(module => {
    console.log("s")
    x = 1
}).catch(err => {
    console.log(err.message)
    x = 0
}
)
console.log(x)

/*function checkKernel() {
    try {
        import KernelLoad from './kernelLoad';
    }
    catch (e) {
        <h1>Kernel not Found !</h1>
    }
}*/

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