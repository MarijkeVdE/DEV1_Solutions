"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

document.onmousedown = move;

/**
 * 
 * @param {MouseEvent} e 
 */
function move(e) {
    console.log(e.pageX);
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(e.pageX, 0);
    context.lineTo(e.pageX, height);
    context.moveTo(0, e.pageY);
    context.lineTo(width, e.pageY);
    context.stroke();
}

let width = context.canvas.width;
let height = context.canvas.height;



let xPositions = [];
let yPositions = [];
let colors = [];


setup();
update();

function setup() {
    for (let i = 0; i < 100; i++) {
        xPositions[i] = Utils.randomNumber(0, width);
        yPositions[i] = Utils.randomNumber(0, height);
        colors[i] = Utils.randomNumber(0, 360);
    }
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < xPositions.length; i++) {
        drawStar(xPositions[i], yPositions[i], colors[i]);
        xPositions[i] += Utils.randomNumber(-2, 2);
        yPositions[i] += Utils.randomNumber(-2, 2);
    }
    requestAnimationFrame(update);
}



function drawStar(x, y, hue) {
    context.fillStyle = Utils.hsl(hue, 100, 50);
    context.beginPath();
    context.moveTo(x+ 5, y + 5);
    context.lineTo(x + 10, y + 5);
    context.lineTo(x + 15, y - 5);
    context.lineTo(x + 20, y + 5);
    context.lineTo(x + 25, y + 5);
    context.lineTo(x + 20, y + 10);
    context.lineTo(x + 25, y + 15);
    context.lineTo(x + 25, y + 15);
    context.lineTo(x + 20, y + 15);
    context.lineTo(x + 15, y + 10);
    context.lineTo(x + 10, y + 15);
    context.lineTo(x + 5, y + 15);
    context.lineTo(x + 10, y + 10);
    context.lineTo(x + 5, y + 5);
    context.fill();
}