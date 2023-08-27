// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// ^pulled from instruction for hw
const RenderSVG = require('./shapes');

// const shape = shapeChoices(triangle);


// test("triangle", () => {


// const RenderSVG = new renderSVG();    
const data = {
    "shapeColor" : "blue",
    "textColor" : "red",
    "characters" : "tst",
    "shape": "triangle",
}
describe('render svg', () => {
    const renderSVG = new RenderSVG(data)
    it("returns svg", () =>{



expect(RenderSVG(data)).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill= "white" />
    <polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"></polygon><text x="150" y="150" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.characters}</text>
    </svg>`)
    })
});