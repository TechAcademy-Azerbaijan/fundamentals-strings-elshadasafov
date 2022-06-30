const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  //   let str = "Hello world! I learn to code."
  let str = result.input;
  let a = 0;
  let b = 0;
  let c = 0;

  for (i = 0; i < str.length; i++) {
    if (str[i] === "+") {
      a = a + 1;
    } else if (str[i] === "-") {
      b = b + 1;
    } else if (str[i] === "*") {
      c = c + 1;
    }
  }
  let sum = a + b + c;
  console.log(sum);
});
