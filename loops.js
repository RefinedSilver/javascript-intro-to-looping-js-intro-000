function forLoop(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (i === 1) {
      return `I am {arr[1]} strange loop.`;
    }
    arr.push("Thanks, Flatiron for starting my programming career!")
  }
}
console.log(forLoop(25));
