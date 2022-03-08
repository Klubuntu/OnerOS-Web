import React, { Component } from 'react';
import '../lib/Boxedwine/boxedwine.css';
import '../lib/Boxedwine/browserfs.min';
import '../lib/Boxedwine/jszip.min';
//import '../lib/Boxedwine/boxedwine-shell';
import '../lib/Boxedwine/boxedwine';
//import '../lib/Boxedwine/browserfs.min.js';
module.exports = function (props) {
    return (
        <div>
            <div id="loading">
                <figure style={{ overflow: 'visible' }} id="spinner"><div className="spinner" /><center style={{ marginTop: '0.5em' }} /></figure>
                <div className="emscripten" id="status">Downloading...</div>
                <div className="emscripten">
                    <progress value={0} max={100} id="progress" hidden={1} />
                </div>
            </div>
            <div id="run-inline" style={{ display: 'none' }}>
                <button id="inline-runbtn" onClick="startInline()">inline</button>
            </div>
            <div id="inline">
                <div className="emscripten">
                    <button id="startbtn" style={{ display: 'none' }} onClick="start()">Start</button>
                    <button id="uploadbtn" style={{ display: 'none' }} onClick="document.getElementById('upload').click()">Add File(s)</button>
                    <input style={{ display: 'none' }} id="upload" name="upload" onClick="document.getElementById('uploadbtn').click();" onchange="startWithFiles(event.target.files);" type="file" multiple />
                    <button id="downloadbtn" style={{ display: 'none' }} onClick="buildTree();">Get File(s)</button>
                    <a style={{ display: 'none' }} id="modalLink" href="#openModal">Open</a>
                    <a style={{ display: 'none' }} id="modalLinkExe" href="#openModalExe">Open</a>
                    <span id="sound-checkbox" style={{ display: 'none' }}>
                        <input type="checkbox" id="soundToggle" onClick="toggleSound();" />Enable Sound
                    </span>
                    <input type="checkbox" id="pointerLock" defaultChecked />Lock/hide mouse pointer
                    <input type="checkbox" id="showConsole" onClick="toggleConsole();" defaultChecked />Show console
                    &nbsp;&nbsp;&nbsp;
                    <input type="checkbox" id="resize" />Resize canvas
                    <input type="button" defaultValue="Fullscreen" onClick="Module.requestFullScreen(document.getElementById('pointerLock').checked, document.getElementById('resize').checked)" />
                </div>
                <div id="dropzone">
                    <div className="emscripten_border">
                        <canvas className="emscripten" id="canvas" oncontextmenu="event.preventDefault()" />
                    </div>
                </div>
                <div>
                    <textarea className="emscripten" id="output" rows={8} style={{ display: 'none' }} defaultValue={""} />
                </div>
                <div id="openModal" className="modalDialog">
                    <div> <a href="#close" title="Close" className="close" onClick="done();">X</a>
                        <div>
                            <h3>Get File(s)</h3>
                            <input id="selectedItem" type="text" size={50} readOnly />
                            <button onClick="extract();">Get</button>
                        </div>
                        <div id="tree">
                        </div>
                        <div>
                            <h3 id="loadStatus">Loading...</h3>
                        </div>
                    </div>
                </div>
                <div id="openModalExe" className="modalDialog">
                    <div> <a id="openModalExeClick" href="#close" title="Close" className="close">X</a>
                        <div>
                            <h3>Execute</h3>
                            <div id="message" />
                            <div id="items" />
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            {/* script type="text/javascript" src="dropbox.min.js"></script */}
            <script type="text/javascript" src="lib/Boxedwine/browserfs.min.js"></script>
            <script type="text/javascript" src="Boxedwine/jszip.min.js"></script>
            <script type="text/javascript" src="lib/Boxedwine/boxedwine-shell.js"></script>
            <script type="text/javascript" src="Boxedwine/other.js"></script>
            <script async type="text/javascript" src="Boxedwine/boxedwine.js"></script>
        </div >
    );
}