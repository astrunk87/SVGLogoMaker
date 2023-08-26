// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// ^pulled from instruction for hw
const renderSVG = require('./shapes');
// const shapes = new triangle();

let data = {
    "shapeColor" : "blue",
    "textColor" : "red",
    "characters" : "tst",
}
expect(renderSVG(data)).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

