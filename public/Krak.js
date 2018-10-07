
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