const sentence = "my name is heather mcleod\n";

let time = 1000;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 50;// <= 1s delay to make it noticeable. Can dial it down later.
}