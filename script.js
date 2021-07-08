window.onload = function() {

    var stage = document.getElementById('stage');
    var context = stage.getContext("2d");

    document.getElementById("counter");

    document.addEventListener("keydown", keyPush);

    setInterval(game, 60);

    const speed = 1;

    var speedX = speedY = 0;
    var positionX = 10;
    var positionY = 15;
    var lenght = 20;
    var numberOfPixels = 20;
    var appleX = appleY = 15;

    var counter = 0;

    var trail = [];
    tail = 5;

    function game() {

        positionX += speedX;
        positionY += speedY;

        if(positionX < 0) {
            positionX = numberOfPixels - 1;
        }

        if(positionX > numberOfPixels - 1) {
            positionX = 0;
        }

        if(positionY < 0) {
            positionY = numberOfPixels - 1;
        }

        if(positionY > numberOfPixels - 1) {
            positionY = 0;
        }

        context.fillStyle = "black";
        context.fillRect(0,0, stage.width, stage.height);

        context.fillStyle = "red";
        context.fillRect(appleX * lenght, appleY * lenght, lenght, lenght);

        context.fillStyle = "green";
        for (var i = 0; i < trail.length; i++) {
            context.fillRect(trail[i].x*lenght, trail[i].y*lenght, lenght - 1, lenght - 1);
            if(trail[i].x == positionX && trail[i].y == positionY) {
                speedX = speedY = 0;
                counter = 0;
                tail = 5;
            }
        }

        trail.push({x:positionX, y:positionY});
        while(trail.length > tail) {
            trail.shift();
        }

        if(appleX == positionX && appleY == positionY) {
            tail++;
            counter++;
            appleX = Math.floor(Math.random() * numberOfPixels);
            appleY = Math.floor(Math.random() * numberOfPixels);
            document.getElementById('counter').innerHTML = "Score: " + counter; 
        }
    }

    function keyPush(event) {
        switch (event.keyCode){
            case 37: //Left
                speedX = -speed;
                speedY = 0;
                break;
            case 38: //UP
                speedX = 0;
                speedY = -speed;
                break;
            case 39: //Right
                speedX = speed;
                speedY = 0;
                break;
            case 40: //Down
                speedX = 0;
                speedY = speed;
                break;
            default:
                break;
        }
    }

}