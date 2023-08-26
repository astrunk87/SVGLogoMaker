
function render(data) {
  const shapeChoices = {
    // circle: circle,
    // square: square,
    triangle: `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

   <rect width="100%" height="100%" fill= "white" />

   <polygon points="100,0 200,200 0,200" fill="${data.shapeColor}"></polygon>
   <text x="100" y="150" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.characters}</text>
   </svg>`

  }
  return shapeChoices[data.shape]
};
// triangle code with help from classmate greg
// function triangle(data){
//   return`
// <svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">

//     <rect width="100%" height="100%" fill= "white" />

//     <polygon points="100,0 200,200 0,200" fill="${data.shapeColor}"></polygon>
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.characters}</text>
//     </svg>`
// };
// // circle code from mozilla doc on svg shapes
// function circle(data) {
//   return `
// <svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">

//   <rect width="100%" height="100%" fill= "white" />

//   <circle cx="150" cy="100" r="80" fill= ${data.shapeColor} />
  

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.characters}</text>

// </svg>`
// };
module.exports = render
// module.exports = circle, render, triangle