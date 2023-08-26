// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// ^pulled from instruction for hw
const shape = require('./shapes');

shape.shapeColor("blue");
expect(shape.rendershape()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

100,0 200,200 0,200