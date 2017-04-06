const mathjs = require('mathjs');

class NeuralNetwork {
  constructor() {
    this.synapticWeights = [
      2 * Math.random() - 1,
      2 * Math.random() - 1,
      2 * Math.random() - 1 ];

    this.sigmoid = this.sigmoid.bind(this);
    this.sigmoidDerivative = this.sigmoidDerivative.bind(this);
    this.train = this.train.bind(this);
    this.think = this.think.bind(this);
  }

  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }

  sigmoidDerivative(x) {
    return x * (1 - x);
  }

  train(trainingSetInputs, trainingSetOutputs, trainingIterations) {
    for(let i = 0; i < trainingIterations; i++)
    {
      const output = this.think(trainingSetInputs);
      const error = trainingSetOutputs - output;
      const adjustment = mathjs.multiply(mathjs.transpose(trainingSetInputs),
        error * this.sigmoidDerivative(output));

      this.synapticWeights = mathjs.add(this.synapticWeights, adjustment);
    }
  }

  think(inputs) {
    const x = mathjs.multiply(inputs, this.synapticWeights);
    return this.sigmoid(x);
  }
}

const neuralNetwork = new NeuralNetwork();
const trainingSetInputs = [[0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1]];
const trainingSetOutputs = mathjs.transpose([[0, 1, 1, 0]]);

neuralNetwork.train(trainingSetInputs[0], trainingSetOutputs[0], 1000000);
neuralNetwork.train(trainingSetInputs[1], trainingSetOutputs[1], 1000000);
neuralNetwork.train(trainingSetInputs[2], trainingSetOutputs[2], 1000000);
neuralNetwork.train(trainingSetInputs[3], trainingSetOutputs[3], 1000000);

console.log(neuralNetwork.synapticWeights);
console.log(neuralNetwork.think([1, 0, 0]));
