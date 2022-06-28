const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  let eded = parseInt(result.input);
  let a = parseInt((eded / 100) % 10);
  let b = parseInt((eded / 10) % 10);
  let c = parseInt(eded % 10);

  console.log(Math.max(Math.max(a, b), c));
});
