
function rendershape(data) {
  const shapeChoices = {
    circle: `<circle cx="150" cy="100" r="80" fill= ${data.shapeColor} />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.characters}</text>`,
  // circle and square code from mozilla doc on svg shapes
  
  square: `<rect x="50" y="0" width="200" height="200" fill="${data.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.characters}</text> `,

  triangle: `<polygon points="100,0 200,200 0,200" fill="${data.shapeColor}"></polygon><text x="100" y="150" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.characters}</text>`
  }
  // triangle code with help from classmate greg
  return shapeChoices[data.shape]
};


function renderSVG(data){
  let logo= `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
   <rect width="100%" height="100%" fill= "white" />
    ${rendershape(data)}
   </svg>`;
  return logo
};

module.exports =  renderSVG
