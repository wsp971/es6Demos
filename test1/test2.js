var es = [];
for (var i = 0; i < 10; i++) {
  let c = i;
  es[i] = function () {
    console.log("Upcoming edition of ECMAScript is ES" + c);
  };
}
es[6]();