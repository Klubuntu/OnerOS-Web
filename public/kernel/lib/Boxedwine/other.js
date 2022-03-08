function startInline() {
    document.getElementById('run-inline').style.display = 'none';
    document.getElementById('loading').style.display = '';
    Config.isRunningInline = true;
    Config.showUploadDownload = true;
    Config.urlParams = "p=notepad";
    var script = document.createElement('script');
    script.src = "boxedwine.js";
    document.body.appendChild(script);
}