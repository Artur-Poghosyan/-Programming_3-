function randomMatrix(n, m) {
    var matrix = [];
    for (var y = 0; y < m; y++) {
        matrix[y] = [];
        for (var x = 0; x < n; x++) {
            matrix[y][x] = 0;
        }
    }
    for (var t = 0; t < 28; t++) {

        var h = Math.floor((Math.random() * r));
        var z = Math.floor((Math.random() * r));
        matrix[h][z] = 1;
    }

    for (var f = 0; f<19; f++) {

        var h = Math.floor((Math.random() * r));
        var z = Math.floor((Math.random() * r));
        matrix[h][z] = 2;
    }

    for (var u = 0; u < 22; u++) {

        var h = Math.floor((Math.random() * r));
        var z = Math.floor((Math.random() * r));
        matrix[h][z] = 3;
    }

    for (var  p = 0; p < 33; p++) {

        var h = Math.floor((Math.random() * r));
        var z = Math.floor((Math.random() * r));
        matrix[h][z] = 4;
    }

    for (var o = 0; o < 4; o++) {
        var h = Math.floor((Math.random() * r));
        var z = Math.floor((Math.random() * r));
        matrix[h][z] = 5;
    }
    return matrix;
}


var r = Math.floor((Math.random() * 81) + 90);
var matrix = randomMatrix(r, r);

var side = 5;



var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var xoshorgishatichArr = [];
var krakArr = [];
function setup() {
    frameRate(150);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gr1 = new GrassEater(x, y, 2);
                grassEaterArr.push(gr1);
            }
            else if (matrix[y][x] == 3) {
                var gr2 = new Gishatich(x, y, 3);
                gishatichArr.push(gr2);
            }
            else if (matrix[y][x] == 4) {
                var gr3 = new Xoshorgishatich(x, y, 4);
                xoshorgishatichArr.push(gr3);
            }
            else if (matrix[y][x] == 5) {
                var gr4 = new Krak(x, y, 5);
                krakArr.push(gr4);
            }

        }
    }
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("red");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();

    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }

    for (var i in xoshorgishatichArr) {
        xoshorgishatichArr[i].eat();
    }
    for (var i in krakArr) {
        krakArr[i].mul();
    }
}



