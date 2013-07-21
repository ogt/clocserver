process.env.PATH = '../bin:' + process.env.PATH;
require("./lib/util")({
    obj : {
        cmd : 'cloc',
        args : [ 'input.tar.gz', '--csv', '--quiet' ],
        pipes : [
            { cmd : 'cut', args : [ '-d', ',', '-f', '5' ] },
            { cmd : 'tail', args : [ '-1' ] },
        ],
    },
    inp : '/dev/null',
    expected : 'cloced.txt'
}, ['cloc', 'cut', 'tail','ls']);

//curl --silent  -F 'a=a' "http://localhost:10000/cloc?args=test/input.tar.gz&args=--csv&args=--quiet"|cut -d , -f 5|tail -1 > cloced.txt
