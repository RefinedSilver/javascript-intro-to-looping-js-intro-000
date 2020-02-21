function forLoop(arr) {
	output = [];

  for (let i = 1; i <= arr; i++) {
    if (i === 1) {
      output.push("I am " + [1] + " strange loop.");
    } else {
      output.push("I am " + [i] + " strange loops.");
    }    
  }
  return output;
}
