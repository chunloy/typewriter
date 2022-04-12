const sentence = "hello there from lighthouse labs";
const totalTime = sentence.length * 50;
let timeOut = 0;

//queue up delays for each character 50ms apart
for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), timeOut += 50);
}

//print a new line after all characters were printed
setTimeout(() => process.stdout.write('\n'), totalTime);