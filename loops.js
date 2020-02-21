function forLoop(arr) {
	output = [];

  for (let i = 0; i < arr; i++) {
    if (i === 0) {
    	output.shift();
    } else if (i === 1) {
      output.push("I am " + i + " strange loop.");
    } else {
      output.push("I am " + i + " strange loops.");
    }
  }
  return output;
}
