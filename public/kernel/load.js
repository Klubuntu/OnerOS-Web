const fs = require('fs');
filenames = fs.readdirSync(__dirname);
fs.readdir(__dirname, function (err, files) {
    //handling error
    if (err) {
        function err(props) {
            return <h1>${err}</h1>;
        }

        ReactDOM.render(<err />, document.getElementById('app'))
    }
    //listing all files using forEach
    files.forEach(function (file) {
        return <h1>w</h1>
    });
});