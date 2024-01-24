const sharp = require("sharp");
const path = require("path");
const { createCanvas } = require("canvas");
const draw = require("./kitten.js");
const fs = require("fs");

const WIDTH = 200;
const HEIGHT = 200;
const filename = "picture";
const dirname = "frames";
if (!fs.existsSync(dirname)) {
  fs.mkdirSync(dirname);
}

const canvas = createCanvas(WIDTH, HEIGHT);
const context = canvas.getContext("2d");
draw(context);

const uint8ClampedArrayImage = context.getImageData(0, 0, WIDTH, HEIGHT).data;

const pathString = path.join(__dirname, dirname, `${filename}.png`);

sharp(uint8ClampedArrayImage, {
  raw: { width: WIDTH, height: HEIGHT, channels: 4 },
}).toFile(pathString);
