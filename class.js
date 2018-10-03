class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));

        if (this.multiply >= 8 && newCell) {
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 1;
            var newGrass = new Grass(x, y, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }



}

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 85;
        this.index = index;
        this.multiply = 0;

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {

        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];

            matrix[this.y][this.x] = 0;

            matrix[y][x] = 2;
            this.x = x;
            this.y = y;
            this.energy--;
            if (this.energy < 1) {
                this.die();
            }
        }
    }

    mul() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            var graseat1 = new GrassEater(newX, newY, this.index);
            grassEaterArr.push(graseat1);
        }
    }

    eat() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];

            matrix[this.y][this.x] = 0;

            matrix[y][x] = 2;
            this.x = x;
            this.y = y;
            this.multiply++;
            for (var i in grassArr) {
                if (newCell[0] == grassArr[i].x && newCell[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.multiply == 10) {
                this.mul();
                this.multiply = 0;
            }

        }

        else {
            this.move();
        }
    }




    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
            }
        }
    }

}




class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 140;
        this.index = index;
        this.multiply = 0;

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character1, character2) {

        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {




                if (matrix[y][x] == character1 || matrix[y][x] == character2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        var emptyCells = this.chooseCell(0, 1);
        var newCell = random(emptyCells);
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            if (matrix[y][x] == 0) {
                matrix[this.y][this.x] = 0;

            }
            else if (matrix[y][x] == 1) {
                matrix[this.y][this.x] = 1;

            }


            matrix[y][x] = this.index;
            this.x = x;
            this.y = y;
            this.energy--;
        }
        if (this.energy < 1) {
            this.die();
        }
    }
    mul() {
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            var gishatich1 = new Gishatich(newX, newY, this.index);
            gishatichArr.push(gishatich1);
        }
    }
    eat() {
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];

            matrix[this.y][this.x] = 0;

            matrix[y][x] = 3;
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;
            for (var i in grassEaterArr) {
                if (newCell[0] == grassEaterArr[i].x && newCell[1] == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.multiply == 10) {
                this.mul();
                this.multiply = 0;
            }
            if (this.energy < 1) {
                this.die();
            }

        }
        else {
            this.move();
        }
    }




    die() {
        this.getNewCoordinates();
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
            }
        }
    }



}





class Xoshorgishatich {

    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 170;
        this.index = index;
        this.multiply = 0;

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character1, character2) {

        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character1 || matrix[y][x] == character2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        var emptyCells = this.chooseCell(0, 1);
        var newCell = random(emptyCells);
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            if (matrix[y][x] == 0) {
                matrix[this.y][this.x] = 0;

            }
            else if (matrix[y][x] == 1) {
                matrix[this.y][this.x] = 1;

            }


            matrix[y][x] = this.index;
            this.x = x;
            this.y = y;
            this.energy--;
        }
        if (this.energy < 1) {
            this.die();
        }
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            var xoshorgishatich = new Xoshorgishatich(newX, newY, this.index);
            xoshorgishatichArr.push(xoshorgishatich);
        }
    }
    eat() {
        var emptyCells = this.chooseCell(2, 3);
        var newCell = random(emptyCells);
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];

            matrix[this.y][this.x] = 0;

            if (matrix[y][x] == 2) {

                for (var i in grassEaterArr) {
                    if (newCell[0] == grassEaterArr[i].x && newCell[1] == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
                matrix[y][x] = 4;
            }

            if (matrix[y][x] == 3) {

                for (var i in gishatichArr) {
                    if (newCell[0] == gishatichArr[i].x && newCell[1] == gishatichArr[i].y) {
                        gishatichArr.splice(i, 1);
                        break;
                    }
                }
                matrix[y][x] = 4;
            }
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;

            if (this.multiply == 5) {
                this.mul();
                this.multiply = 0;
            }
            if (this.energy < 1) {
                this.die();
            }

        }
        else {
            this.move();
        }
    }




    die() {
        this.getNewCoordinates();
        matrix[this.y][this.x] = 0;
        for (var i in xoshorgishatichArr) {
            if (this.x == xoshorgishatichArr[i].x && this.y == xoshorgishatichArr[i].y) {
                xoshorgishatichArr.splice(i, 1);
            }
        }
    }
}

class Krak {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 50;
        this.multiply = 0;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
          this.multiply++;
        var newCell = random(this.chooseCell(1));

        if (this.multiply >= 18 && newCell) {
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 5;
            var newKrak = new Krak(x, y, this.index);
                krakArr.push(newKrak);
                
             for (var i in grassArr) {
            if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                grassArr.splice(i, 1);
            }
        }

            // if (matrix[y][x] == 0) {
            //     var Krak = new Krak(x, y, this.index);
            //     krakArr.push(newKrak);
            //     matrix[y][x] = 5;
            // }
            // if (matrix[y][x] == 1) {
            //     this.multiply++;
            //     for (var i in grassArr) {
            //         if (x == grassArr[i].x && y == grassArr[i].y) {
            //             grassArr.splice(i, 1);
            //             break;
            //         }
            //     }
                
               
                this.multiply = 0;
            }

          
        }
    } 
//}