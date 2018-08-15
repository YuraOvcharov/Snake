//настройка холста
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


const width = 500;//window.innerWidth / 2;
const height = 500;//window.innerHeight / 2;
let score = 0;
let checkCollisionIndicator = false; // для того, чтобы при рекурсивном вызове setTimeout выйти.(столкнулся ли со стено?)
let startGameIndicator = false; // для возможности делать паузу (запущена игра?)


canvas.width = width;
canvas.height = height;

//вычисляем ширину и высоту ячейки
const blockSize = 10;
let widthInBlocks = width / blockSize;
let heightInBlocks = height / blockSize;

//рисуем MENU
let menu = () =>{
    ctx.clearRect(0,0,width,height);
    ctx.fillStyle = "Black";
    ctx.fillRect(0,0,width,height);

    ctx.font = "30px serif";
    ctx.fillStyle = "White";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";


    ctx.fillText("Start game", width / 2, height / 2);
    ctx.font = "15px serif";
    ctx.fillText("press space", width / 2, height / 2 + 20);
}
//рисуем рамку
let drawBorder = () =>{
    ctx.fillStyle = "Gray";
    ctx.fillRect(0,0,width,blockSize);//верх
    ctx.fillRect(0,height - blockSize,width,blockSize);//низ
    ctx.fillRect(0,0,blockSize,height);//лево
    ctx.fillRect(width - blockSize,0,blockSize, height);//право
};
//Выводим счет
let drawScore = () => {
    ctx.font = "20px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Счет: "+ score,blockSize,blockSize);
};
// Конец игры
let gameOver = (timeoutId) => {
    //clearInterval(intervalId);//остановка счетчика для setInterval

//    clearTimeout(timeoutId);
    ctx.font = "30px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Конец игры", width / 2, height / 2);
};

//рисуем окружность для apple
let circle = (x,y,radius,fillCircle)=>{
    ctx.beginPath(); //создает новый контур
    ctx.arc(x,y,radius,0,Math.PI*2);//рисование дуг
    if (fillCircle){
        ctx.fill();//заполнененная
    };
};

//задаем ячейку
class Block{
    constructor(col,row){
        this.col = col;
        this.row = row;
    }
    //рисуем ячейки
    drawSquare(color){
        let x = this.col *blockSize;
        let y = this.row * blockSize;
        ctx.fillStyle = color;
        ctx.fillRect(x,y,blockSize,blockSize);
    };
    //рисуем apple
    drawCircle(color){
        let centerX = this.col*blockSize + blockSize / 2;
        let centerY = this.row * blockSize + blockSize / 2;
        ctx.fillStyle = color;
        circle(centerX,centerY,blockSize / 2, true);
    };

    //проверка. Находится ли ячейка в той же позиции
    equal(otherBlock){
        return this.col === otherBlock.col && this.row === otherBlock.row;
    };
}
//задаем змею
class Snake{
    constructor(){
        this.segments = [
            new Block(7,3),
            new Block(6,3),
            new Block(5,3)
        ];
        this.direction = "right";//текущее направление
        this.nextDirection = "right";//следующее направление
    }
    draw(){
        // for (let seg of this.segments){
        //     seg.drawSquare("Red");
        // }; //все одним цветом


        this.segments[0].drawSquare("Red");
        for(let i = 1; i < this.segments.length; i++){
            if (i%2){
                this.segments[i].drawSquare("yellow");
            }else {
                this.segments[i].drawSquare("blue");
            }

        };
    };
    //передижение змеи
    move(){
        let head = this.segments[0];
        let newHead;

        this.direction = this.nextDirection;
        if (this.direction == "right"){
            newHead = new Block(head.col+1, head.row);
        }else if (this.direction == "down"){
            newHead = new Block(head.col, head.row+1);
        }else if (this.direction == "left"){
            newHead = new Block(head.col-1, head.row);
        }else if (this.direction == "up"){
            newHead = new Block(head.col, head.row-1);
        };

        if (this.checkCollision(newHead)){
            checkCollisionIndicator = true;
            return;
        };

        this.segments.unshift(newHead);
        if (newHead.equal(apple.position)){
            score +=1;
            apple.move();
        }else{
            this.segments.pop();
        }
    };
    //проверка на столкновение с собой или стеной
    checkCollision(head){
        let leftCollision = (head.col === 0);
        let toptCollision = (head.row === 0);
        let righttCollision = (head.col === widthInBlocks - 1); 
        let bottomCollision = (head.row === heightInBlocks - 1);

        let wallCollision = leftCollision || toptCollision || righttCollision || bottomCollision;

        let selfCollision = false;

        for (let seg of this.segments){
            if (head.equal(seg)){
                selfCollision = true;
            }
        }
        return wallCollision || selfCollision;
    };
    // задаем следующее направление змеи
    setDirection(newDirection){
        if (this.direction === "up" && newDirection === "down"){
            return;
        }else if (this.direction === "right" && newDirection === "left"){
            return;
        }else if (this.direction === "down" && newDirection === "up"){
            return;
        }else if (this.direction === "left" && newDirection === "right"){
            return;
        };

        this.nextDirection = newDirection;
    };
};
class Apple {
    constructor(){
        this.position = new Block(widthInBlocks / 2,heightInBlocks / 2);
    };

    draw(){
        this.position.drawCircle("LimeGreen");
    };

    move(){
        let randomCol = Math.floor(Math.random() * (widthInBlocks - 2) + 1);//пограничное значение
        let randomRow = Math.floor(Math.random()* (heightInBlocks - 2) + 1);// от 1 до widthInBlocks - 1
        let i = 0;
        while(i < snake.segments.length){
            if (snake.segments[i].col === randomCol && snake.segments[i].row === randomRow){
                randomCol = Math.floor(Math.random() * (widthInBlocks - 2) + 1);
                randomRow = Math.floor(Math.random()* (heightInBlocks - 2) + 1);
                i = 0;
            }else{
                i += 1;
            };
        };
        this.position =  new Block (randomCol,randomRow);
    };
};

//создание объектов
let snake = new Snake();
let apple = new Apple();


let direction = {
     37: "left",
     38: "up",
     39: "right",
     40: "down"
 };

 $("body").keydown(function(event){
    let newDirection = direction[event.keyCode];
    if (newDirection !== undefined){
        snake.setDirection(newDirection);
    };
    if(event.keyCode === 32){ //code enter 32code "space"
        if (startGameIndicator === false){
            startGameIndicator = true;
            startGameDraw();
        }else{
            startGameIndicator = false;
        };
    };
});


let animationTime = 100;


function startGameDraw (){
    let timeoutId = setTimeout(function gameLoop(){ // Функция будет жить в памяти, пока не сработал (или не был очищен) таймер
        ctx.clearRect(0,0,width,height);
        drawScore();
        snake.move();
        snake.draw();
        apple.draw();
        drawBorder();

         //для увеличения скорости
        let levelOfComplexity = score * 2;

        if ((checkCollisionIndicator === false) && (startGameIndicator === true)){ //проверяем для того, чтобы рекурсия НЕ вызывалась вечно
        //потому что без нее после столкновения можно продолжить играть т к рекурсия не останавливается
            setTimeout(gameLoop, animationTime-levelOfComplexity);
        }else if (checkCollisionIndicator === true){
            gameOver(timeoutId);
            setTimeout(function(){
                document.location.reload(true);
            },1000);
        }else if(startGameIndicator === false){
            ctx.font = "30px Courier";
            ctx.fillStyle = "Black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("ПАУЗА", width / 2, height / 2);
        };        
    },100);   
};

menu(); // запуск меню игры



