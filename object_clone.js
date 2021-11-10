const x = {
  x: 10,
   draw() {
    console.log("Hello");
  }
};
const other = {};

for (let key in x) {
  other[key] = x[key];
}

console.log(other);
