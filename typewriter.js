const sentence = "hello there from lighthouse labs";
const totalTime = sentence.length * 50;
let timeOut = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeOut += 50);
}

setTimeout(() => {
  process.stdout.write('\n');
}, totalTime);