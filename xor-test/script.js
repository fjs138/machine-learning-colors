// "net" is our neural network
const net = new brain.NeuralNetwork({
    // not required, but stated explicitly
    // can add additional layers like [4,5,6]
    hiddenLayers: [3]
})

// train ai
net.train([
    {//xor operations, exclusive or
    input: [0,0],
    output: [0]
    },
    {
        input: [1,0],
        output: [1]
    },
    {
        input: [0,1],
        output: [1]
    },
    {
        input: [1,1],
        output: [0]
    },
])



const diagram = document.getElementById('diagram')
diagram.innerHTML = brain.utilities.toSVG(net)

// test ai
console.log(net.run([0,0]));
/* outputs
Float32Array
0: 0.059012096375226974
This is because it's doing a calculation and not literally ending up with 0.0000000
*/

console.log(net.run([1,0]));
/* outputs
Float32Array
0: 0.9335516691207886
This is because it's doing a calculation and not literally ending up with 1.0000000
*/