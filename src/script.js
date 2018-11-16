/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }

    this.moveDown = function(){
        this.top +=this.speed;
        console.log('ok: ' + this.top);
    }

    this.moveUP = function(){
        this.top -=this.speed;
        console.log('ok: ' + this.top);
    }

    this.moveLeft = function(){
        this.left -=this.speed;
        console.log('ok: ' + this.left);
    }
}

var hero = new Hero('bird.jpg', 20, 30, 200,120);

function isAtTopLeft(object){
    if(object.left==30&&object.top==20){
        return true;
    }
}

function isAtTopRight(object){
    if(object.left==1230&&object.top==20){
        return true;
    }
}

function isAtBotRight(object){
    if(object.left==1230&&object.top==500){
        return true;
    }
}
function isAtBotLeft(object){
    if(object.left==30&&object.top==500){
        return true;
    }
}

let status = "topleft";
function start(){
    if(isAtTopRight(hero)){
        status="topright";
    }
    if(isAtTopLeft(hero)){
        status="topleft";
    }
    if(isAtBotRight(hero)){
        status="botright";
    }
    if(isAtBotLeft(hero)){
        status="botleft";
    }
    if(status=="topleft"){
        hero.moveRight();
    }
    if(status=="topright"){
        hero.moveDown();
    }
    if(status=="botright"){
        hero.moveLeft();
    }
    if(status=="botleft"){
        hero.moveUP();
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500);
}

start();