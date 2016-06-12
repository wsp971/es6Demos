"use strict";

var es = [];

var _loop = function _loop() {
  var c = i;
  es[i] = function () {
    console.log("Upcoming edition of ECMAScript is ES" + c);
  };
};

for (var i = 0; i < 10; i++) {
  _loop();
}
es[6]();
