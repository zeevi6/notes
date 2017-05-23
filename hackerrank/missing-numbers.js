// https://www.hackerrank.com/challenges/missing-numbers

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

    let result = [];

    const length_n = readLine();
    const n = readLine().split(' ').map(Number);
    const length_m = readLine();
    const m = readLine().split(' ').map(Number);

    const freq_n = {};
    n.forEach(function(x) {
        freq_n[x] = (freq_n[x] || 0) + 1;
    });

    const freq_m = {};
    m.forEach(function(x) {
        freq_m[x] = (freq_m[x] || 0) + 1;
    });

    if (freq_n.length != freq_m.length) {
        return false;
    }

    for (let key in freq_n) {
        if (freq_n[key] !== freq_m[key]) {
            result.push(key)
        }
    }

    console.log(result.join(' '));

}