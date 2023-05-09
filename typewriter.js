
const sentence = "hello there from lighthouse labs";

function printChar(index) {
  if (index < sentence.length) {
    process.stdout.write(sentence[index]);
    setTimeout(() => printChar(index + 1), 50);
  } else {
    console.log();
  }
}

printChar(0);