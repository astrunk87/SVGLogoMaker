// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// ^pulled from instruction for hw for guidince
const RenderSVG = require('./shapes'); 
// need for let data gathered from classmate greg
describe('render svg', () => {
    let data = {
    "shapeColor" : "blue",
    "textColor" : "red",
    "characters" : "tst",
    "shape": "triangle",
}
it("returns svg", () =>{

expect(RenderSVG(data)).toEqual(
    `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill= "white" />
    <polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"></polygon><text x="150" y="150" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.characters}</text>
    </svg>`)
    })
});

describe('render svg', () => {
    let data = {
    "shapeColor" : "blue",
    "textColor" : "red",
    "characters" : "tst",
    "shape": "circle",
}
it("returns svg", () =>{

expect(RenderSVG(data)).toEqual(
    `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill= "white" />
    <circle cx="150" cy="100" r="80" fill="${data.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.characters}</text>
    </svg>`)
    })
});

describe('render svg', () => {
    let data = {
    "shapeColor" : "blue",
    "textColor" : "red",
    "characters" : "tst",
    "shape": "square",
}
it("returns svg", () =>{

expect(RenderSVG(data)).toEqual(
    `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill= "white" />
    <rect x="50" y="0" width="200" height="200" fill="${data.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.characters}</text>
    </svg>`)
    })
});