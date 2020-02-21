function forLoop(arr) {
	output = [];

  for (let i = 1; i <= arr; i++) {
    if (i === 1) {
      output.push("I am " + [i] + " strange loop.");
    } else {
      output.push("I am " + [i] + " strange loops.");
    } else
  }
  return output;
}
