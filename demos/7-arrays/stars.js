"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;



let xPositions = [];
let yPositions = [];
let colors = [];


setup();
update();

function setup() {
    for (let i = 0; i < 600; i++) {
        xPositions[i] = Utils.randomNumber(0, width);
        yPositions[i] = Utils.randomNumber(0, height);
        colors[i] = Utils.randomNumber(0, 360);
    }
}

function update() {
    context.fillStyle = "hsl";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < xPositions.length; i++) {
        drawStar(xPositions[i], yPositions[i], colors[i]);
        yPositions[i] += Utils.randomNumber(-5, 5);
    }
    requestAnimationFrame(update);
}



function drawStar(x, y, hue) {
    context.fillStyle = Utils.hsl(hue, 360, 80);
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
    context.stroke();
}

