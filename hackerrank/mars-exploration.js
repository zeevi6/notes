// https://www.hackerrank.com/challenges/mars-exploration

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
    input_stdin += data;
});

process.stdin.on('end', function() {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {

    const code_O = 'O'.charCodeAt(0);
    const code_S = 'S'.charCodeAt(0);

    let S = readLine();
    let count = 0;

    for (let x = 0; x < S.length; x++) {
        if (x % 3 === 1) {
            if (S.charCodeAt(x) !== code_O) {
                count++;
            }
        } else {
            if (S.charCodeAt(x) !== code_S) {
                count++;
            }
        }
    }

    console.log(count);

}