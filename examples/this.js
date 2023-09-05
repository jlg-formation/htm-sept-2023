"use strict";

console.log("this: ", this);

function toto() {
  console.log("this: ", this);
}

toto();

const obj = {
  titi: toto,
};

obj.titi();

const obj2 = {
  titi: function () {
    console.log("this: ", this);
  },
};

obj2.titi();

const tutu = obj2.titi;

tutu();

const tutu2 = tutu.bind("truc bidule");
tutu2();

tutu.apply("truc bidule", [1, 3, 67]);
tutu.call("truc bidule", 1, 3, 67);

const tutu4 = () => {
  console.log("this: ", this);
};
