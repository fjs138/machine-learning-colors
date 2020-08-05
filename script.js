// "net" is our neural network
const net = new brain.NeuralNetwork({
  // not required, but stated explicitly
  // can add additional layers like [4,5,6]
  hiddenLayers: [3],
});

// train ai
const data = [
  {
    //0,0,0 is black
    input: { r: 0, g: 0, b: 0 },
    // 1 is white
    output: [1],
  },
  {
    //1,1,1 is white
    input: { r: 1, g: 1, b: 1 },
    // 0 is black
    output: [0],
  },
];

net.train(data);

// color element
const colorEle = document.getElementById("color");
// guess element
const guessEle = document.getElementById("guess");
//
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");

setRandomColor();

whiteButton.addEventListener('click', ()=>{
  chooseColor(1)
})

blackButton.addEventListener('click',()=>{
  chooseColor(0)
})

function chooseColor(value){
  data.push({
    input: color,
    output: [value]
  })
  setRandomColor()
}

function setRandomColor() {
   color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  }
  colorEle.style.backgroundColor=
      // multiply the random number that's between 0 and 1 by 255
      `rgba( 
      ${color.r * 255},
      ${color.g * 255}, 
      ${color.b * 255})`
      
}

console.log(color);
