const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  let str = result.input;
  let a = 0;
  let b = 0;

  for (i = 0; i < str.length; i++) {
    if (parseInt(str[i]) === 2) {
      a = a + 1;
    } else if (parseInt(str[i]) === 5) {
      b = b + 1;
    }
  }

  if (a > b) {
    console.log("2");
  } else if (a < b) {
    console.log("5");
  } else {
    console.log("=");
  }
});
