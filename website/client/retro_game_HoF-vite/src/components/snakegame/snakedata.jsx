let canvasDataref = null;

export const createGame = (canvasRef, size) => {

    if (canvasDataref == null) {
        canvasDataref = new canvasData(canvasRef, size);
    } else if (size != canvasDataref.size) {
        canvasDataref.reloadSize(canvasRef, size);
    }

}

export const getCanvas = () => {return canvasDataref};

export const getSnake = () => {return canvasDataref == null ? null : canvasDataref.snake};
export const getSnake2 = () => {return canvasDataref == null ? null : canvasDataref.snake2};

export const getPoints = () => {return canvasDataref == null ? null : canvasDataref.points};

class canvasData {

    constructor(canvasRef, size) {

        this.canvas = canvasRef.current;
        this.size = size;
        this.pxAmount = 101; // how many pixels will there be
        this.pxSize = Math.floor(1 * (size / this.pxAmount));
        this.context = this.canvas.getContext('2d');

        this.paused = true;

        this.context.canvas.height = size;
        this.context.canvas.width = size;

        this.snake = new snake(this.pxAmount, 1);
        this.snake2 = new snake(this.pxAmount, 2);
        this.points = new points(this.pxAmount);

        this.clearCanvas();
        this.snake.drawsnake(this.context, this.size, this.pxAmount, this.pxSize);
        this.snake2.drawsnake(this.context, this.size, this.pxAmount, this.pxSize);
    }

    reloadSize(canvasRef, size) {
        this.canvas = canvasRef.current;
        this.size = size;
        this.pxSize = Math.floor(1 * (size / this.pxAmount));
        this.context = this.canvas.getContext('2d');

        this.context.canvas.height = size;
        this.context.canvas.width = size;

        this.clearCanvas();
        this.snake.drawsnake(this.context, this.size, this.pxAmount, this.pxSize);
        this.snake2.drawsnake(this.context, this.size, this.pxAmount, this.pxSize);
        this.points.drawPoints(this.context, this.size, this.pxAmount, this.pxSize);
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }

    advance(setState) {

        if (this.paused) {
            return;
        }

        this.clearCanvas();
        this.snake.movesnake(this.pxAmount, setState);
        this.snake.drawsnake(this.context, this.size, this.pxAmount, this.pxSize);
        this.snake2.movesnake(this.pxAmount, setState);
        this.snake2.drawsnake(this.context, this.size, this.pxAmount, this.pxSize);
        this.points.check(this.snake);
        this.points.check(this.snake2);
        checkCollision(setState, this.snake.loc, this.snake2.loc);
        this.points.spawn();
        this.points.drawPoints(this.context, this.size, this.pxAmount, this.pxSize);
    
    }

    reset(canvasRef, size) {
        this.canvas = canvasRef.current;
        this.size = size;
        this.pxSize = Math.floor(1 * (size / this.pxAmount));
        this.context = this.canvas.getContext('2d');

        this.paused = true;

        this.context.canvas.height = size;
        this.context.canvas.width = size;

        this.clearCanvas();
        this.snake.reset(this.pxAmount);
        this.snake2.reset(this.pxAmount);
        this.snake.drawsnake(this.context, this.size, this.pxAmount, this.pxSize);
        this.snake2.drawsnake(this.context, this.size, this.pxAmount, this.pxSize);
        this.points.reset(this.pxAmount);
    }

}

class snake {

    constructor(pxAmount, id) {
        let tmpLoc;
        id == 2 ? tmpLoc = Math.floor((pxAmount / 3)) * 2 : tmpLoc = Math.floor((pxAmount / 3));
        this.loc = [[tmpLoc, tmpLoc]];
        this.current = [tmpLoc, tmpLoc];
        this.last = [tmpLoc, tmpLoc];
        this.direction = 0;
        this.hasEaten = false;

        this.points = 0;

        this.id = id;
    }

    drawsnake(context, size, pxAmount, pxSize) {

        this.id == 1 ? context.fillStyle = '#08f71c' : context.fillStyle = '#4708f7';

        this.loc.forEach((pos) => {
            context.fillRect(Math.floor(pos[0] * (size / pxAmount)), Math.floor(pos[1] * (size / pxAmount)), pxSize, pxSize);
        });

        return;

    }

    movesnake(pxAmount, setState) {

        // remove last position
        if (!this.hasEaten) {

            for (const [i, pos] of this.loc.entries()) {
                if (pos[0] == this.last[0] && pos[1] == this.last[1]) {
                    this.loc.splice(i, 1);
                    break;
                }
            }
        } else {
            this.hasEaten = false;
        }

        // find next position
        switch (this.direction) {
            case (0): {this.current = [this.current[0], this.current[1] - 1]; break;}
            case (1): {this.current = [this.current[0] - 1, this.current[1]]; break;}
            case (2): {this.current = [this.current[0], this.current[1] + 1]; break;}
            case (3): {this.current = [this.current[0] + 1, this.current[1]]; break;}
        }

        // check that snake doesn't hit itself
        this.loc.forEach((pos) => {
            if (pos[0] == this.current[0] && pos[1] == this.current[1]) {
                setState(-1)
                return;
            }
        });

        // check that we are not out of bounds
        if (this.current[0] < 0 || this.current[0] >= pxAmount || this.current[1] < 0 || this.current[1] >= pxAmount) {
            setState(-1);
            return;
        }

        // append new location
        this.loc.push(this.current);
        this.last = (this.loc[0]);

    }

    reset(pxAmount) {

        let tmpLoc;
        this.id == 2 ? tmpLoc = Math.floor((pxAmount / 3)) * 2 : tmpLoc = Math.floor((pxAmount / 3));
        this.loc = [[tmpLoc, tmpLoc]];
        this.current = [tmpLoc, tmpLoc];
        this.last = [tmpLoc, tmpLoc];
        this.direction = 0;
        this.hasEaten = false;

        this.points = 0;
    }

}

function checkCollision(setState, loc1, loc2) {

    const loc2check = JSON.stringify(loc2);

    loc1.forEach((pos) => {
        if(loc2check.indexOf(JSON.stringify(pos)) != -1) {
            setState(-1);
            return;
        }
    })

}

class points {

    constructor(pxAmount) {

        this.pxAmount = pxAmount;

        // how fast we will spawn new points
        this.minPointSpeed = 1;
        this.maxPointSpeed = 10;

        // spawning new point
        this.pointSpeed = 2;

        this.loc = [];
    }

    spawn() {

        if (this.pointSpeed < 1) {

            const loc = getSnake().loc;

            // spawn new
            for (let i = 0; i <= this.pxAmount * this.pxAmount; i++) {

                const xPos = Math.floor(Math.random() * (this.pxAmount + 1));
                const yPos = Math.floor(Math.random() * (this.pxAmount + 1));

                let done = true;

                // check for duplicates in lists
                for (const [x, y] of loc) {
                    if (x == xPos && y == yPos) {
                        done = false;
                    }
                }
                for (const [x, y] of this.loc) {
                    if (x == xPos && y == yPos) {
                        done = false;
                    }
                }

                if (!done) {continue;}

                this.loc.push([xPos, yPos]);
                this.pointSpeed = (Math.random() * (this.maxPointSpeed - this.minPointSpeed)) + this.minPointSpeed;

                break;

            }

        } else {
            this.pointSpeed -= 1;
        }
    }

    check(snake) {

        const current = snake.current;

        for (const [i, pos] of this.loc.entries()) {
            if (current[0] == pos[0] && current[1] == pos[1]) {
                this.loc.splice(i, 1);
                snake.hasEaten = true;
                snake.points += 1;
                break;
            }
        }

    }

    drawPoints(context, size, pxAmount, pxSize) {
        context.fillStyle = '#d0492f';
        this.loc.forEach((pos) => {
            context.fillRect(Math.floor(pos[0] * (size / pxAmount)), Math.floor(pos[1] * (size / pxAmount)), pxSize, pxSize);
        });

        return;
    }
    
    reset(pxAmount) {
        this.pxAmount = pxAmount;
        this.loc = [];
    }

}